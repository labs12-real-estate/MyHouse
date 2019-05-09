import React, { useState, useRef, useLayoutEffect } from 'react';

function ImageCard({ result, searchTerm }) {
  const imgRef = useRef();
  const [spans, setSpans] = useState(0);
  const calculateSpans = () => {
    const { current } = imgRef;
    const height = current.clientHeight;
    const span = Math.ceil(height / 12);
    setSpans(span);
  };

  useLayoutEffect(() => {
    imgRef.current.addEventListener('load', calculateSpans);
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} src={result.urls.regular} alt={result.description} />
    </div>
  );
}

export default ImageCard;
