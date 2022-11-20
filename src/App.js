import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🥕": " Carrot",
  "🥒": "Cucumber",
  "🥦": "Broccoli",
  "🧄 ": "Garlic",
  "🍄": "Mushroom"
};
var emojisWeKnow = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiHandler(emoji) {
    // console.log(emoji)
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Intepreter</h1>
      <input onChange={emojiClickHandler}></input>
      <div id="meaning">
        Meaning:<span style={{ color: "Red" }}>{meaning}</span>
      </div>
      <h3>Emojis We Know!</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
