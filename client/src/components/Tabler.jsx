import Showdata from './Showdata';
import Table from 'react-bootstrap/Table';

const Tabler=({data})=>{
    return(
        <div style={{padding:"20%"}}>
        <center>
        <Table style={{border:"2px solid blue",borderRadius:"10px"}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((test)=><Showdata dat={test}/>)}
          </tbody>
        </Table>
        {/* {data.map((test)=><p>Name:{test.name}</p>)} */}
        </center>
      </div>
    )
}
export default Tabler