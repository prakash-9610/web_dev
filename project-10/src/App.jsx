import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllowd, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //useRef is basically use to copy and select the text 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllowd) str += "!@#$%^&*-_=+[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // in this math.random() will generate a decimal value, after that we have  to make the value >=1, to do this we multiply the value with str.length(), to avoid 0 we added +1
      pass += str.charAt(char);
    }

    setPassword(pass);





  }, [length, numberAllow, charAllowd, setPassword]);

  const copytoclipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 15);
    window.navigator.clipboard.writeText(Password);
  }, [Password])

  useEffect(() => { passwordGenerator() }, [length, numberAllow, charAllowd, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copytoclipBoard} >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={() => { setNumberAllow((prev) => !(prev)) }} />
            <label>numberAllow</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowd} id='numberInput' onChange={() => { setCharAllowed((prev) => !(prev)) }} />
            <label>charAllow</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
