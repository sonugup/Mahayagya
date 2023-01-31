import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login =() => {
    const [inputval, setInputval] =useState({
        email:"",
        password:""
      })
    console.log(inputval)
    const Naviget=useNavigate()
    
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

        const getuserData=localStorage.getItem("adddata")
        console.log(getuserData)
        const { email,  password} = inputval
    
         if(email===""){
          alert("email field is requred")
        }else if(!email.includes("@")){
          alert("@ field is requred")
        }
        else if(password===""){
          alert("name field is requred")
        }else if(password.length<4){
          alert("password min 4 length is requred")
        }
        else{
            if(getuserData && getuserData.length){
                const userdata=JSON.parse(getuserData)
                console.log(userdata.email, userdata.password)
                if(userdata.email===email &&  userdata.password === password){
                  console.log("user login succesfully")
                    localStorage.setItem("logdata", JSON.stringify(getuserData))
                    Naviget("/detals")
                }
                  else if(userdata.email!==email){
                    alert("email is not match")
                  }
                  else if(userdata.password!==password){
                    alert("password is not match")
                  }
                
                  else if(userdata.length === 0 ){
                    alert("invailed data")
                }
                else{
                  alert("something is going wrong")
                    
                }
            }
            
          
         
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
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicEmail">
                <Form.Control name="email"  onChange={getdata} type="email" placeholder="Enter email" />
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
              <p>Already Have an Account SignIn</p>
            </Form>
          </div>
        </section>
      </div>
    </>
  )
}


export default Login;