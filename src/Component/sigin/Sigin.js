import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

const Sigin = () => {
 let dataget=JSON.parse(localStorage.getItem("adddata"))||[]

 
  
   const Naviget=useNavigate()
  const [inputval, setInputval] =useState({
    name:""
  })
console.log(inputval)

const [data, setData]=useState([])
  const getdata = (e) => {
        

        const {value, name} = e.target;
        console.log(value, name)

        setInputval(() => {
          return {
            ...inputval,
            [name]:value
          }
        })

  }

  const submitdata= (e) => {
    e.preventDefault();
    const {name} = inputval

    if(name===""){
      alert("name field is requred")
    } 
    
    else{
        console.log("succsseful")
      localStorage.setItem("adddata", JSON.stringify(dataget, inputval))
      Naviget("/login")
    }

   
  }

  

    
  return (
    <>
      <div className="container">
        <section
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div className="leftdata " style={{ margin: 30, width: 400 }}>
            <h3>Sign Up</h3>
            <Form>
              <Form.Group
                className="mb-3 col-lg-11"
                controlId="formBasicPassword"
              >
                <Form.Control name="name"  onChange={getdata} type="text" placeholder="Name" />
              </Form.Group>
              

              <Button onClick={submitdata} variant="primary" type="submit">
                Submit
              </Button>
              <p>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
            </Form>
          </div>
          <div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default Sigin;
