import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Homepage from "./components/body/homepage/Homepage"



import Brand from "./components/body/brands/Brand"
import BrandAuto from "./components/body/brands/BrandAuto"





function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/brand" element={<Brand/>}/>
      <Route path="/auto/brand/:id" element={<BrandAuto/>}/>




    </Routes>
    </>
  )
}

export default App
