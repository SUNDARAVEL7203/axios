import React from "react"
import { Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import { UserContextProvider } from "./Components/usercontext"
import Home from "./Components/Home"
import ListPages from "./Components/ListPage"
function App() {


  return (
   <div className="App">
  <Header/>
  <UserContextProvider>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route  path = "/ListPages" element={<ListPages/>}/>
    </Routes>
  </UserContextProvider>

   </div>
  )
}

export default App
