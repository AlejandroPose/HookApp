import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    
    const getFecth = async () => {
        setState({
            ...state,
            isLoading: true,
        });
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);
        setState({
            data: data,
            isLoading: false,
            hasError: null,
        });
    };
    
    useEffect(() => {
        getFecth();
    }, [url]);
    
    return (
        {
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError,
        }
    );

};

export default useFetch;

//API https://api.breakingbadquotes.xyz/v1/quotes