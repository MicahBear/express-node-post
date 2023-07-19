
const Display=({data})=>{
    return(
        <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.age}</td>
        <td>{data.dob}</td>
    </tr>

    )
}
export default Display