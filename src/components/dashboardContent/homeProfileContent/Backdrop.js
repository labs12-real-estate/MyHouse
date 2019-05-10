import React, { useRef } from 'react';

function Backdrop() {
  const ref = useRef();
  const [image, setImage] = React.useState(null);
  const handleChange = e => {
    const file = e.target.files[0];
    const extension = file.type === 'image/jpeg' ? 'jpg' : 'png';
    setImage(URL.createObjectURL(file));
    console.log(`${Date.now()}.${extension}`);
  };
  const handleClick = e => {
    ref.current.click();
  };
  return (
    <div className="house_profile_backdrop_image">
      {image && (
        <figure className="backdrop_figure">
          <img alt="" src={image} className="backdrop_img" />
        </figure>
      )}
      <button onClick={handleClick}>Upload Image</button>
      <input hidden type="file" accept="image/png, image/jpeg" ref={ref} onChange={handleChange} />
    </div>
  );
}

export default Backdrop;
