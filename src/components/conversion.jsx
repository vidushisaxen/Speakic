import React from "react";
import "../styles/conversion.scss";
import text1 from "../Assets/text1.png";
import text2 from "../Assets/text2.jpg";
import speech2 from "../Assets/speech2.jpg";
import speech3 from "../Assets/speech3.png";
import TextToSpeech from "./TextToSpeech";

const Conversion=()=>{
    const text =
      "Text-to-speech feature is now available on relatively any website or blog. It's a game changer that you can listen to the content instead of reading it. Especially effective for people with visual or cognitive impairments or on the go. I came up with the idea to implement it for my blog, so this is how I started researching this topic which ended up being a tutorial for you. So in this tutorial, we will go through the process of building a text-to-speech component in React. We will use the `Web Speech API` to implement the text-to-speech functionality.";

    return (
      <div className="body grid grid-cols-2 gap-4 md:grid-cols-1 ">
        {/* <TextToSpeech text={text} />
        <p>{text}</p> */}

        <a href="#" alt="to speech" target="_blank">
          <div class="card">
            <div class="wrapper">
              <img src={speech2} class="cover-image" />
            </div>
            {/* <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
              class="title"
            /> */}
            <h2 className="title">SPEECH</h2>
            <img src={speech3} class="character" />
          </div>
        </a>

        <a href="#" alt="To Text" target="_blank">
          <div class="card">
            <div class="wrapper">
              <img src={text2} class="cover-image" />
            </div>
            <h2 className="title">TEXT</h2>
            <img src={text1} class="character" id="text" />
          </div>
        </a>
      </div>
    );
}

export default Conversion;