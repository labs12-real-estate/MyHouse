import React, { useRef, useState, useLayoutEffect } from 'react';

function ImageCard({ photoURL, handleModalOpen, handleDeleteFromGallery }) {
  const imgRef = useRef();
  const [spans, setSpans] = useState(0);
  const calculateSpans = () => {
    const { current } = imgRef;
    const height = current && current.clientHeight;
    const span = Math.ceil(height / 12);
    setSpans(span > 30 && span % 2 === 1 ? span - 2 : span);
  };

  useLayoutEffect(() => {
    imgRef.current.addEventListener('load', calculateSpans);
  }, []);

  return (
    <figure style={{ gridRowEnd: `span ${spans}` }} className="gallery-figure" onClick={handleModalOpen}>
      <button className="trash" onClick={handleDeleteFromGallery}>
        <i className="fas fa-trash" />
      </button>
      <img alt="" ref={imgRef} src={photoURL} />
    </figure>
  );
}

export default ImageCard;
