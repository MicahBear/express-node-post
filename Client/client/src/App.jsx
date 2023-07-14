import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([]) //declaration of state for data

  useEffect(()=>{                     //this function is used to render the screen with new data
    const getTasks= async () =>{
      const tasksFromServer = await fetchTasks()
      setData(tasksFromServer)
    }
    getTasks()
  },[])                  //based on this data variable, the screen renders with the new data from json file.

  const fetchTasks = async () => {    //the data fetch function
    const res = await fetch('http://localhost:3000/api')
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <table>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Student Age</th>
         </tr>
         {data.map((items) => {
           return (
              <tr key={items.id}>
                 <td>{items.id}</td>
                 <td>{items.name}</td>
                 <td>{items.age}</td>
              </tr>
                  )
          })}
      </table>
    </div>
  )
}

export default App
