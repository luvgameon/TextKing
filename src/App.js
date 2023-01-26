import './App.css';
import TextArea from './components/TextArea';
import Title from './components/Title';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("Light mode has been enabled", "success");
    }
  }
 
  return (
    <>
    <div mode={mode}>
    <Title title="TEXT KING"/>
    <div className="form-check form-switch togglebtn" >
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    <div  className="container" >
    <TextArea mode={mode} heading="Enter Your Text Below"/>
   
</div>
</div>
    </>
  );
}

export default App;
