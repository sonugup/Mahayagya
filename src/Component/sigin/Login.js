import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login =() => {
    const [inputval, setInputval] =useState([])
    // const [data, setData]=useState("")
    const localStorageData = () => {
      let valueData = JSON.parse(localStorage.getItem("adddata")) || [];
      // setData((oldItems) => {
      //   return [...oldItems, data]
      // })
      setInputval(valueData)
    };

    useEffect(() => {
      localStorageData();
    }, []);
    
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
            <div>{inputval.name}</div>
           
          </div>
        </section>
      </div>
    </>
  )
}


export default Login;