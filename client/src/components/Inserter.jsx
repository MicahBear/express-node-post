import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Inserter=({onAdd})=>{

    const [name,setName]=useState("");
    const [email,setMail]=useState("");
    const [age,setAge]=useState(0);
    const [dob,setDob]=useState("");

    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        onAdd({name,email,age,dob})

        setName("")
        setMail("")
        setAge(0)
        setDob("")
    }
    const stl={
        textAlign:"left",
        
    }


    return (
        <><Container>
          <Container fluid style={{border:"1px solid white",borderRadius:"10px",width:"30rem"}}>
            <h1 style={{textAlign:"center",paddingTop:"10%",color:"rgb(212, 211, 211)"}}>Register Table</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px"}}>
            <Form onSubmit={HandleSubmission} style={{padding:"30px"}}>
                
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={stl}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=> setMail(e.target.value)} required/>
                </Form.Group>          
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label style={stl}>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e)=> setAge(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label style={stl}>Date of birth</Form.Label>
                <Form.Control type="text" placeholder="Enter Dob" value={dob} onChange={(e)=> setDob(e.target.value)} required/>
                </Form.Group>
            </Row>
            <Row>
            <Button type="submit">Insert</Button>
            </Row>
            
            </Form>
            </Card>
         </Container>
         </Container>
        </>
      );
}
export default Inserter