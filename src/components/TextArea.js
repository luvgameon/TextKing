import React, { useState } from 'react'
import CountWords from './CountWords';
import Preview from './Preview';


export default function TextArea(props) {
    const [text,setText]=useState('Enter Text Here');
    const changehandle =(event)=>{
        setText(event.target.value)
        
    }
    const clickUpperHandler =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    const clickLowerHandler =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        
    }
    const clickClearHandler =()=>{
        let newText='';
        setText(newText);
        
    }
  
  
      
           
       
   
    

  return (
      <>
      <h3 className='my-3'>{props.heading}</h3>
      
    
    
      
    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white',border: '1px solid black'}} onChange={changehandle} value={text} id="mytext" rows="5"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={clickUpperHandler}>Convert To Upper</button>
    <button className="btn btn-primary my-3 mx-2" onClick={clickLowerHandler}>Convert To Lower</button>
    <button className="btn btn-danger my-3 mx-2" onClick={clickClearHandler}>Clear</button>
    <Preview text={text}/>
    <CountWords char={text.length} words={text.split(" ").length}></CountWords>
   
   
      </>
  )
}
