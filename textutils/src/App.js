import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
    }
    else{
      setMode("dark");
    }
  }


  
  return (

    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading="Enter Text Here to Analyze"/>
    </div>
    </>
     );
}

export default App;
