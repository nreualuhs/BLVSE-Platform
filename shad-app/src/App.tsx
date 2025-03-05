import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import TableGroup from './components/TableGroup'
import { DataTable } from './components/datatable/data-table'
import DemoPage from './components/datatable/page'

//implement 
// - table (done)
// - link to new page (done)
// - material ui for rating stars (done)
// - linking to actual tool (progress)

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className= "Title">Tool Index</h1>
      <DemoPage></DemoPage>
    </>
  )
}
//<TableGroup></TableGroup>
export default App
