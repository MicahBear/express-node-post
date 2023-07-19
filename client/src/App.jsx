import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './Display';

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
  

  return (
    <>
      <div style={{padding:"20%"}}>
        <center>
        <Table striped bordered style={{width:"30rem"}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Dob</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val)=><Display data={val}/>)}
          </tbody>
        </Table>
        
        </center>
      </div>
      
    </>
  )
}

export default App
