import { useState, useEffect } from "react"
import Displaycard from "./Displaycard";
import Formscreate from "./Formscreate";
export const ListStudents = () => {
    const [students , setStudents] = useState([])

    const getStudents = async () => {
        try {
          const response = await fetch("http://localhost:3000/api");
          const jsonData = await response.json();
    
          setStudents(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getStudents();
      }, []);
    
      console.log(students);


      const addCard = async (details) =>{    
        const res = await fetch('http://localhost:3000/api',{
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(details)
        })
        const resp = await res.json()
        setStudents([...students, resp])
      }


      const deleteCard = async (id)=>{  

        await fetch(`http://localhost:3000/api/${id}`,
        {method: 'DELETE'})
        setStudents(students.filter((val)=> val.id !==id,
        console.log(id)
        ))
    }


  return (
    <>
        <ul>
            <Formscreate addCard={addCard}/>
            {students.map((student)=>(
              <Displaycard student={student} deleteCard={deleteCard}/>
            ))}
        </ul>
    </>
  )
}
// testing
// testing3
