
import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = () =>{
    console.log("you clicked UpperCase button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLowClick = () =>{
    console.log("You clicked LowerCase button");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClear = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text successfully cleared","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }
  const handleChange = (event) =>{
    setText(event.target.value);
  }
  const[text, setText] = useState("");
  return (
    <>
    <div className='container'>
    <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" 
    style={{
      backgroundColor:props.mode==="dark"?"#30302d":"white",
      color:props.mode==="dark"?"white":"black"
      }}></textarea>
    </div> 
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear text</button>
    <button className='btn btn-primary mx-2' onClick={speak}>Text to Speech</button>
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
      <h4> Text Summary Here</h4>
      <p> {text.split(/\s+/).filter((word) => word !== "").length} words and  {text.length} characters</p>
      <p> { 0.008 *text.split(/\s+/).filter((word) => word !== "").length} Minutes read</p>
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
      <h4> Previews</h4>
      <p>{text.length>0?text:"Enter something to textbox above preview it here"}</p>
    </div>
    </>
  )
}
