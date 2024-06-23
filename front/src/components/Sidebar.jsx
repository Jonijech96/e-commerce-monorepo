import React from 'react'
import Cart from './Cart'

const Sidebar = ({show,setShow}) => {
  return (
    <>
    
    <div className={`border shadow w-full h-screen bg-base-300/60	fixed top-0 transition-all duration-500 z-10 ${show? "right-0":"right-full"} flex place-content-start`}>
      <div className="bg-base-100 w-2/3 p-4">
        <div className="card-actions justify-end">
          <button onClick={()=>setShow(!show)} className="btn">X</button>
        </div>
        <h1 className='text-3xl text-center'>Cart</h1>
        <Cart />
      </div>
    </div>
    </>
  )
}

export default Sidebar