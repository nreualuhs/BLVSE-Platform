import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import TableGroup from './components/TableGroup'

//implement 
// - table (done)
// - link to new page (progress)
// - material ui for rating stars (progress)
// - linking to actual tool (progress)

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className= "Title">Tool Index</h1>
      <TableGroup></TableGroup>
    </>
  )
}

export default App
