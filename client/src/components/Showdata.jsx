import Table from 'react-bootstrap/Table';

const Showdata=({dat})=>{
return(
    <>
    <tr>
        <td>{dat.id}</td>
        <td>{dat.name}</td>
        <td>{dat.email}</td>
        <td>{dat.age}</td>
    </tr>
    </>
)
}
export default Showdata