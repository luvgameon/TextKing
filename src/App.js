import './App.css';
import TextArea from './components/TextArea';
import Title from './components/Title';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
       showAlert("Light mode has been enabled", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
      
    }, 1500);

  }
 
  return (
    <>
    <div mode={mode}>
    <Title title="TEXT KING"/>
    <Alert alert={alert}/>
    <div className="form-check form-switch togglebtn" >
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label>
</div>
    <div  className="container" >
    <TextArea mode={mode} showAlert={showAlert} heading="Enter Your Text Below"/>
   
</div>
</div>
    </>
  );
}

export default App;
