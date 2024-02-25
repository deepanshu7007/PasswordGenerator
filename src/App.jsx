import {useCallback, useState} from 'react'
import './App.css'
export default function App() {
  let [length,setLength] = useState(8);
  
  const generateRandomNumber = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    str+="!@#$%^&*()-=_+[]{}|;:'\",.<>?/";
    str+="1234567890";
    let passwordString = "";
    for(let i=0;i<length;i++){
      passwordString+=str.charAt(Math.floor(str.length*Math.random()))
    }
    
    return passwordString;
  }
  
  let [password,setPassword] = useState(generateRandomNumber);

  
  
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  
  const passwordGenerator = useCallback(generateRandomNumber,[length,numberAllowed,charAllowed,setPassword]);
  
return (
    <>
        <h1 className='text-4xl text-center' >Password Generator</h1>
        <input type='text' value={password} readOnly></input>
        <label>{length}</label>
        <input type="range" min={"0"} max={"20"} onChange={(e)=>{length = e.target.value;setLength(length);setPassword(passwordGenerator())}} defaultValue={length}></input>
    </>
  )
}