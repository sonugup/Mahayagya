import React from 'react'
// import {
    
//     VStack,Input,Button,Heading,
//   } from "@chakra-ui/react"
import { useState } from 'react'
const List = () => {
    let [name, setName] = useState("")
    let olddata = JSON.parse(localStorage.getItem("data")) || []
    const [ data, setData ] =  useState(olddata)

    const handleSubmit = ()=>{
        setData([...data, name])
       data.push(name)
        localStorage.setItem("data", JSON.stringify(data)) 
        setName("")
    }
  return (
    <div>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>
            {
                data.length > 0 &&  data.map((el,i)=> <h1 key={i}>{el}</h1>)
            }
       
    </div>
  )
}

export default List