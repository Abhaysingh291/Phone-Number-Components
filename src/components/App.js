import {  useState } from 'react';
import './App.css';
import Input from './input';
import Dropdown from './Dropdown';
function App() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Country");
  const [sinput, setSinput] = useState(false);
  var result=isActive||sinput;
  return (
    <>
    
    {isActive && <div className='hello'>Active with dropdown</div>}
    {sinput && <div className='hello'>Active</div>}
    {!result && <div className='hello'>Inactive</div>}
    <div className="App" style={{
      position: "relative",
      top: "-15vh",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: isActive||sinput ?"2px solid black":"2px solid rgb(208, 192, 192)"
    }}>
      <div className='phone'>Phone Number</div>
      <Dropdown selected={selected} setSelected={setSelected} isActive={isActive} setIsActive={setIsActive} />
     | <Input name="Phone number" sinput={sinput} setSinput={setSinput}/>
    </div>
    </>
  );
}

export default App;
