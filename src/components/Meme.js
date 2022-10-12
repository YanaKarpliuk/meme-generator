import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, [])

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  function handleChange(e) {
    setMeme(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <div className="form-input-field">
          <input
            type="text"
            className="form-input"
            placeholder="Enter top text"
            value={meme.topText}
            name='topText'
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Enter bottom text"
            value={meme.bottomText}
            name='bottomText'
            onChange={handleChange}
          />
        </div>
        <button type="button" className="form-btn" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
