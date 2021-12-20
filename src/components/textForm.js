import React, { useState } from 'react'// we import react {useState} //useState is a use full component that we
// we use to update the value of a veriable that we use in program because react not allow to update the 
// value derictly os it is must to learn this blow line "for more search on goole"





export default function TextForm(props) {
  // this is the magical line
  const [Text, setText] = useState("Enter text here");

  // note! 
  // text="is the veriable"
  // setText="is the function which is use to update the value of text veriablr"

  // text="something"//this not allowed
  // we have to use this way

  // setText("some thing")//this is correct

  const clickUpper = () => {
    console.log("click hua" + Text)
    let newText = Text.toUpperCase()
    setText(newText);
  }

  const clickLower = () => {
    console.log("click hua" + Text)
    let newText = Text.toLowerCase()
    setText(newText);
  }

  const clearSpace = () => {
    console.log("click hua" + Text)
    let newText = Text.replace(" ","")
    setText(newText);
  }

  const handeOnChange = (event) => {

    console.log("on change")
    setText(event.target.value)

  }


  return (
    <>
      <div className='container'>

        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea className="form-control" value={Text} onChange={handeOnChange} id="mybox" rows="8"></textarea>
          {/* here on text are we must have to use onChange event to chane the value it is compalsary */}
          {/* other wise it will give u error soo */}
          {/* and the best thing is that when we use this event we get an complementry variable="event" */}
          {/* that we use on above onChange function  */}
        </div>
        <button className='btn btn-primary ' onClick={clickUpper}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={clickLower}>Convert To Uppercase</button>
        <button className='btn btn-warning ' onClick={clearSpace}>Clearspace</button>
      </div>

      <div className='container '>
        <h1>your text summery</h1>
        <p>{Text.split(" ").length}: words {Text.length}: elements</p>
        <p>{0.2*Text.split(" ").length}: minutes to read this</p>
        <h3>preview</h3>
        <p>{Text}</p>
        
      </div>

    </>
  )
}



