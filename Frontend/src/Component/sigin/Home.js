import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sigin from './Sigin'
import Login from './Login'
import Details from './detals'
import Tample from '../Temple/Tample';
const Home = () => {
  return (
    <>
      {/* <NavabarPage/>  */}
      <Routes>
        <Route path="/" element={<Tample />} />
        <Route path="/sigin" element={<Sigin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detals" element={<Details />} />
      </Routes>
    </>
  )
}

export default Home
