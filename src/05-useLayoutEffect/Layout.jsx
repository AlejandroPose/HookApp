import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingQuote from "../03-examples/LoadingQuote";
import Quote from "../03-examples/Quote";

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const { data, isLoading, hasError } = useFetch( url );
    const { quote, author } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <h2>Quote #{ counter }</h2>
        <hr />
        {
            isLoading
                ? (
                    <LoadingQuote/>
                )
                : (
                    <Quote quote={ quote } author={ author }/>
                )
        }
        <button 
            className="btn btn-primary" 
            onClick={ () => increment() }
        >
            Next Quote
        </button>
    </>
  );

};

export default Layout;