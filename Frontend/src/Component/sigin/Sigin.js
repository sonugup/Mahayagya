import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

const Sigin = () => {
  const Naviget = useNavigate();

  const [inputval, setInputval] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    number: "",
    role: "",
  });
  console.log(inputval);

  const [data, setData] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setInputval(() => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };

  const submitdata = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, number, role } = inputval;

    if (first_name === "") {
      alert("name field is requred");
    }
    if (last_name === "") {
      alert("name field is requred");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("@ field is requred");
    } else if (password === "") {
      alert("name field is requred");
    } else if (password.length < 4) {
      alert("password min 4 length is requred");
    } else if (number === "") {
      alert("Number field is requred");
    } else if (number.length < 10) {
      alert("Number  is not requred");
    } else if (role === "") {
      alert("data field is requred");
    } else {
      console.log("succsseful");
      localStorage.setItem("adddata", JSON.stringify(...data, inputval));
      Naviget("/login");
    }
  };
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
            <h3 className="sname">श्री श्री 108 रूद्र महायज्ञ</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicPassword">
                <Form.Control
                  className="inputs"
                  name="first_name"
                  onChange={getdata}
                  type="text"
                  placeholder="Enter the First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicPassword">
                <Form.Control
                  className="inputs"
                  name="last_name"
                  onChange={getdata}
                  type="text"
                  placeholder="Enter the Last Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicEmail">
                <Form.Control
                  className="inputs"
                  name="email"
                  onChange={getdata}
                  type="email"
                  placeholder="Enter the email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicPassword">
                <Form.Control
                  className="inputs"
                  name="password"
                  onChange={getdata}
                  type="password"
                  placeholder="Enter the Password"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicPassword">
                <Form.Control
                  className="inputs"
                  name="mobile"
                  onChange={getdata}
                  type="number"
                  placeholder="Enter the Mobile Number"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-11" controlId="formBasicPassword">
                <Form.Control
                  className="inputs"
                  name="role"
                  onChange={getdata}
                  type="number"
                  placeholder="Enter the your Role"
                />
              </Form.Group>

              <Button className="lbtn" onClick={submitdata} variant="primary" type="submit">
                Submit
              </Button>
              <p>
                Already Have an Account{" "}
                <span>
                  <NavLink to="/login">SignIn</NavLink>
                </span>{" "}
              </p>
            </Form>
          </div>
          <img src="mahadev.png" alt="mahadev" />
        </section>
      </div>
    </>
  );
};

export default Sigin;
