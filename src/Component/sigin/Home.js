import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavbarPage from '../Navbar/NavabarPage'
import Login from './Login'
import Tample from '../Temple/Tample';
import Sigin from './Sigin';
import List from './List';
const Home = () => {
  return (
    <>
      {/* <NavabarPage/>  */}
      <Routes>
        <Route path="/" element={<Tample />} />
        <Route path="/list" element={<List />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Home
