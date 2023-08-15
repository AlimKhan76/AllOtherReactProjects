import { useState } from 'react';
import './App.css';

function App() {
  const[num, setNum]=useState(0);

  const incrNumFunction=()=>{
    setNum(num+1);
  }
  const decrNumFunction=()=>{
    if(num>0){
    setNum(num-1);
    }
    else{
    setNum(0);
  }
  }

  return (
    <>
    <div style={{textAlign:'center'}}>
      <p>{num}</p>
    <button onClick={incrNumFunction}>INCR</button>
    <button onClick={decrNumFunction}>DECR</button>
    </div>
    </>
   );
}

export default App;
