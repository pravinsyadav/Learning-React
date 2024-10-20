import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked " + text);
    let newtext = text.toUpperCase;
    setText(newtext);
  };

  const clickonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter the text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows={8}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleupclick}
        onChange={clickonchange}
      >
        Convert to Uppercase
      </button>
    </div>
  );
}
