import React from"react"
import { useState } from "react"
import {ToastContainer, toast} from "react-toastify";
function App() {

  const [count, setCount] = useState(0);
  const submit =() =>{

    setCount(0);
    toast.warn("Counter is reset");
  }

  const substract =() =>{
     
   setCount(count -1);
   toast.info("substract is Clicked");
  }

  return (
    <>
      <div className="max-w-sm mx-auto mt-24 p-6 border rounded-lg shadow text-center bg-white">
      <h2 className="text-2xl font-bold mb-6">Counter1 App</h2>
      <h1 className="text-5xl font-bold mb-6">{count}</h1>  

      <div className="flex justify-between gap-4">

      <button onClick={()=>{setCount(count +1)}} className="bg-blue-500 text-white-500 py-2 px-4 rounded">Add</button>
      <br />
      <button onClick={()=>setCount(count-1)} className="bg-red-500 text-white-500 py-2 px-4 rounded">Substract</button>   
      <br />
      <button onClick= {submit} className="bg-green-500 py-2 px-4 rounded ">Reset</button>   

      <ToastContainer /> 
      </div>
      
       </div>
      </>
  )
}

export default App


