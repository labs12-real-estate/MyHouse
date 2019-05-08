import React, { useState, useRef, useEffect } from 'react';

function ImageCard({ result }) {
  const imgRef = useRef();
  const [spans, setSpans] = useState(0);
  const calculateSpans = () => {
    const { current } = imgRef;
    const height = current.clientHeight;
    const span = Math.ceil(height / 10 + 1);
    console.log(span);
    setSpans(span);
  };

  useEffect(() => {
    imgRef.current.addEventListener('load', calculateSpans);
  }, []);

  console.log(result);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} src={result.urls.thumb} alt={result.description} />
    </div>
  );
}

export default ImageCard;
