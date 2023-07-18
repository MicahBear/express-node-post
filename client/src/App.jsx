import { useState,useEffect } from 'react'
import './App.css'
import Tabler from './components/Tabler';
import Inserter from './components/Inserter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
function App() {
  const [data,setData]=useState([]);
  
  useEffect(()=>{                     //this function is used to render the screen with new data
    const getTasks= async () =>{
      const tasksFromServer = await fetchTasks()
      setData(tasksFromServer)
    }
    getTasks()
  },[])                               //based on this data variable, the screen renders with the new data from json file.
                                      
  const fetchTasks = async () => {    //The data fetch function
    const res = await fetch('http://localhost:3000/api')
    const data = await res.json()
    return data
  }
  const addDetails = async (details) =>{    
    const res = await fetch('http://localhost:3000/api',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(details)
    })
    const resp = await res.json()
    setData([...data, resp])
  }

  return (
    <>
  <div className='main'>
  <div className='content'>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Tabler data={data}/>}/>
        <Route path="/Insert" element={<Inserter onAdd={addDetails}/>}/>
      </Routes>
    </Router>
    </div>    
    </div>
    </>
  )
}

export default App
