import React, { useState, useRef, useLayoutEffect } from 'react';

function ImageCard({ result, searchTerm }) {
  const imgRef = useRef();
  const [spans, setSpans] = useState(0);
  const calculateSpans = () => {
    const { current } = imgRef;
    const height = current && current.clientHeight;
    const span = Math.ceil(height / 12);
    const adjustedSpan = (span > 30 && span % 2 === 1) || span === 42 ? span - 2 : span;
    setSpans(adjustedSpan);
  };

  useLayoutEffect(() => {
    imgRef.current.addEventListener('load', calculateSpans);
  }, [spans]);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }} className="design_studio_img_div">
      <img ref={imgRef} src={result.urls.small} alt={result.description} />
    </div>
  );
}

export default ImageCard;
