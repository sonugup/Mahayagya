import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

const Sigin = () => {
   const Naviget=useNavigate()
  const [inputval, setInputval] =useState({
    name:"",
    email:"",
    date:"",
    password:""
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
    const {name, email, date, password} = inputval

    if(name===""){
      alert("name field is requred")
    } else if(email===""){
      alert("email field is requred")
    }else if(!email.includes("@")){
      alert("@ field is requred")
    }else if(date===""){
      alert("data field is requred")
    }
    else if(password===""){
      alert("name field is requred")
    }else if(password.length<4){
      alert("password min 4 length is requred")
    }
    else{
        console.log("succsseful")
      localStorage.setItem("adddata", JSON.stringify(...data, inputval))
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
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicEmail">
                <Form.Control name="email"  onChange={getdata} type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-11"
                controlId="formBasicPassword"
              >
                <Form.Control  name="date" onChange={getdata} type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-11"
                controlId="formBasicPassword"
              >
                <Form.Control name="password"  onChange={getdata} type="password" placeholder="Password" />
              </Form.Group>

              <Button onClick={submitdata} variant="primary" type="submit">
                Submit
              </Button>
              <p>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sigin;
