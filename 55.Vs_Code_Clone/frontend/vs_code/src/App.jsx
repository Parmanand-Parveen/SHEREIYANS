import { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Modal from './components/Modal'
import { useDispatch } from 'react-redux'
import { getAll } from './Store/Slices/FileSlice'
import Read from './components/Read'

function App() {
  const [count, setCount] = useState(0)
 
  const dispatch = useDispatch()


  useEffect(() => {
    
   dispatch(getAll())
   
  }, [])
  
 
 


  return (
    <>
      <div className='flex'>  

       <div className='flex w-screen'>
       <SideBar/>
       <Read/>
       </div>
      
      <Modal />
      </div>
    </>
  )
}

export default App