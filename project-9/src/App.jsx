import './App.css'
function App() {
  return (
    <>
      <body className='bg-amber-300' id='body'>
      <div className="mt-133 flex flex-row gap-5 justify-center items-center border border-black p-4">
          <button className='bg-red-500 text-black rounded-xl text-center p-1' onClick={() => document.body.className = "bg-red-500"}>red</button>
          <button className='bg-yellow-500 text-black rounded-xl text-center p-1'onClick={() => document.body.className = "bg-yellow-500"}>yellow</button>
          <button className='bg-green-500 text-black rounded-xl text-center p-1' onClick={() => document.body.className = "bg-green-500"}>green</button>
          <button className='bg-blue-500 text-black rounded-xl text-center p-1' onClick={() => document.body.className = "bg-blue-500"}>blue</button>
        </div>
      </body>
    </>
  )
}
export default App
