import React, { useState } from 'react'
import CountWords from './CountWords';
import Preview from './Preview';


export default function TextArea(props) {
    const [text,settext]=useState('Enter Text Here');
    const changehandle =(event)=>{
        settext(event.target.value)
        
    }
    const clickUpperHandler =()=>{
        let newText=text.toUpperCase();
        settext(newText);
        props.showAlert("Converted To Upper Case","success");
        
    }
    const clickLowerHandler =()=>{
        let newText=text.toLowerCase();
        settext(newText);
        
    }
    const RemoveExtraSpace =()=>{
        let newText=text.replace(/\s+/g, ' ').trim();
        settext(newText);
        
    }
    const clickClearHandler =()=>{
        let newText='';
        settext(newText);
        
    }
    const CopyText =()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Text Copy","success");
        
    }
  
  
      
           
       
   
    

  return (
      <>
      <h3 className='my-3'>{props.heading}</h3>
      
    
    
      
    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#D3D3D3', color: props.mode==='light'?'black':'white',border: '1px solid black'}} onChange={changehandle} value={text} id="mytext" rows="5"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={clickUpperHandler}>Convert To Upper</button>
    <button className="btn btn-secondary my-3 mx-2" onClick={clickLowerHandler}>Convert To Lower</button>
    <button className="btn btn-success my-3 mx-2" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>
    <button className="btn btn-warning my-3 mx-2" onClick={CopyText}>Copy Text</button>
    <button className="btn btn-danger my-3 mx-2" onClick={clickClearHandler}>Clear</button>
    <Preview text={text}/>
    <CountWords char={text.length} words={text.split(" ").length}></CountWords>
   
   
      </>
  )
}
