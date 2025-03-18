import React from "react";
import { Cards } from "./Cards";
import { emojipedia } from "../emojipedia";

function CreateCard(emojiped) {
  return (
    <Cards
      key={emojiped.key}
      emoji={emojiped.emoji}
      name={emojiped.name}
      meaning={emojiped.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(CreateCard)}
    </div>
  );
}

export default App;
