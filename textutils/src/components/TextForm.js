import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalClick = () => {
    let newText = text.charAt(0).toUpperCase() + text;
    console.log(newText);
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const copyTextHandler = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const removeSpaceHandler = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="mx-1 btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="mx-1 btn btn-primary" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="mx-1 btn btn-primary" onClick={handleCapitalClick}>
          Convert to Capitalize
        </button>
        <button className="mx-1 btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="mx-1 btn btn-primary" onClick={copyTextHandler}>
          Copy Text
        </button>
        <button className="mx-1 btn btn-primary" onClick={removeSpaceHandler}>
          Remove Extra Spaces
        </button>
      </div>

      <div className=" my-5 container">
        <h2>Your Text Summary</h2>
        <p>
          <strong>{text.split(" ").length}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length}</strong> Minutes to read
        </p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
