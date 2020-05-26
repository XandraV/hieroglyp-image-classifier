import React, { useState } from "react";
import "./App.css";

const lol = require("./390082_M17.png");

function App() {
  const [pred, setPred] = useState("unknown");
  const [imageToUpload, setImageToUpload] = useState("");

  const data = new FormData();
  data.append("file", imageToUpload);
  
  for (let p of data) console.log(p);
  const onChange = (e) => {
    setImageToUpload(e.target.files[0])
  }
  function handleClick() {
    fetch(`http://localhost:5000/predict0`, {
      method: "POST",
      body: data,
    })
      .then((response) =>
        response.json().then((data) => {
          setPred(data.prediction);
        })
      )
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>predict</button>
      <input onChange={onChange} type='file'/>
      <div>{pred}</div>
    </div>
  );
}

export default App;
