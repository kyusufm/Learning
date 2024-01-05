import { useState, useEffect } from 'react';
import './App.css';

//functional component

const App = () => {

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
     setCounter(100);
  },[])

  return (
    <div className="App">

      <button onClick={()=>setCounter((prevCount)=>prevCount -1)}> - </button>
      <h1>Name: {counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>prevCount +2)}>+</button>
    </div>
  );
}

export default App;
