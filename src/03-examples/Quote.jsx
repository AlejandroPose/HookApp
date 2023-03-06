import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    heigth: 0,
  });

  useLayoutEffect(() => {
    
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({
      width: width,
      heigth: height,
    });
  
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
          <p 
            className=""
            ref={ pRef }
          >
            { quote }
          </p>
          <footer className="blockquote-footer">{ author }</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
      <br />
    </>
  );

};

export default Quote;