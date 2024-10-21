import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
  };

  const clickonchange = (event) => {
    console.log("on change");
    setText(event.target.value); // setText: A function to update the value of text.
  };

  const [text, setText] = useState(""); // The component has a piece of state called text, which is initially set to empty string " ".

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} // text: The current value of the text.
            onChange={clickonchange}
            id="myBox"
            rows={8}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          onClick={handleupclick}
          onChange={clickonchange}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleLoclick}
          onChange={clickonchange}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleclearclick}
          onChange={clickonchange}
        >
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} letters
        </p>
      </div>
    </>
  );
}
