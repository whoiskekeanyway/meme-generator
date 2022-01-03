// import memesData from "./memesData";
import React from "react";
import dice from "./dice-sharp.svg";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });



  // Fetch data from the API and save it into the state 

  React.useEffect(() => {
    const url = "https://api.imgflip.com/get_memes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);


  // Select a random image from the API and save it into the state
  function loadRandomImage(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  // function to store top and bottom text to state object

  function handleChange(event) {
    // const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
      // [name]: value,
    }));
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          onChange={handleChange}
          name='topText'
          value={meme.topText}
        />
        <input
          type='text'
          placeholder='Bottom Text'
          onChange={handleChange}
          name='bottomText'
          value={meme.bottomText}
        />
        <a className='form--button' onClick={loadRandomImage} href='react.com'>
          New Meme
          <img className='meme-image' src={dice} alt='' />
        </a>
      </div>
      <div className='meme-container'>
         <div className='meme'>
        <img alt='' src={meme.randomImage} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
