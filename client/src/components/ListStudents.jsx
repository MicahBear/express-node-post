import { useState, useEffect } from "react"
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
  return (
    <>
    
    </>
  )
}
