import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/addEmployee" element = {<AddEmployee/>}/>
      </Routes>
      
    </>
  )
}

export default App
