import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainCalculator from './components/MainCalculator'


function App() {
const [openModal,setOpenModal]=useState(false)
  return (
    <div className="container mt-5">
      <h1 className='' >
                Calculator
      </h1>
      <MainCalculator  show={openModal} onHide={() => setOpenModal(false)}/>
      <button className='btn btn-primary' onClick={()=>setOpenModal(true)}>
        Click on
      </button>
    </div>
  )
}

export default App
