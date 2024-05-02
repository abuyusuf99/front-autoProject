import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Homepage from "./components/body/homepage/Homepage"




function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
    </Routes>
    </>
  )
}

export default App
