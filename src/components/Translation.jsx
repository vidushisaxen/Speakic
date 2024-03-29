import React, { useEffect } from "react";
import "../styles/translations.scss";
import countries from "../js/data";
import NavSide from "./NavSide";
const Translation = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exhchangeIcon = document.querySelector(".exchange");
    const selectTag = document.querySelectorAll("select");
    const icons = document.querySelectorAll(".row i");
    const translateBtn = document.querySelector("button");

    selectTag.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id == 0
            ? country_code == "en-GB"
              ? "selected"
              : ""
            : country_code == "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    exhchangeIcon.addEventListener("click", () => {
      let tempText = fromText.value;
      let tempLang = selectTag[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTag[0].value = selectTag[1].value;
      selectTag[1].value = tempLang;
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTag[0].value;
      let translateTo = selectTag[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");

      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((data) => {
            if (data.id === 0) {
              toText.value = data.translation;
            }
          });
          toText.setAttribute("placeholder", "Translation");
        });
    });

    icons.forEach((icon)=>{
        icon.addEventListener("click",({target})=>{
            if(!fromText.value || !toText.value) return;
            if(target.classList.contains("fa-copy")){
                if(target.id=='from'){
                    navigator.clipboard.writeText(fromText.value);
                }else{
                    navigator.clipboard.writeText(toText.value);
                }
            }else{
                let utterance ;
                if(target.id =='from'){
                    utterance = new SpeechSynthesisUtterance(fromText.value);
                    utterance.lang = selectTag[0].value;
                }else{
                    utterance = new SpeechSynthesisUtterance(toText.value);
                    utterance.lang = selectTag[1].value;
                }
                speechSynthesis.speak(utterance);
            }
        });
    });
  }, []);

  return (
    <>
    <NavSide></NavSide>
    <div className="translate-component">
      <div className="translation-container">
        <div className="traslation-wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
            ></textarea>
            <textarea
              readOnly="true"
              spellCheck="false"
              className="to-text"
              placeholder="Translation"
            ></textarea>
          </div>
          <ul className="controls">
            <li className="row from">
              <div className="icons">
                <i id="from" className="fas fa-volume-up" />
                <i id="from" className="fas fa-copy" />
              </div>
              <select></select>
            </li>
            <li className="exchange">
              <i className="fas fa-exchange-alt" />
            </li>
            <li className="row to">
              <select></select>
              <div className="icons">
                <i id="to" className="fas fa-volume-up" />
                <i id="to" className="fas fa-copy" />
              </div>
            </li>
          </ul>
        </div>
        <button>Translate Text</button>
      </div>
      </div>
    </>
  );
};

export default Translation;
