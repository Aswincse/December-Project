import React, { useState } from 'react';

export default function Project2() {
  const [image, setImage] = useState("https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg");

  const handleclick = () => {
    setImage((prevImage) => (
      prevImage === "https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg"
        ? "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        : "https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg"
    ));
  };

  return (
    <div>
      <img src={image} alt="imagedisp" />
      <br />
      <button onClick={handleclick}>CHANGE IMAGE</button>
    </div>
  );
}
