import { Container } from "@mui/material"
import React, { useCallback } from "react"
import "./App.css"
import logo from "./assets/card_media_view.png"
import CustomCard from "./CustomCard"

function App() {
  const checkStatus = useCallback((status: boolean) => {
    console.log("status", status)
  }, [])

  return (
    <div className="App">
      <Container>
        <CustomCard initialState label={"Flood zone 3"} mediaContent={logo} checkStatus={checkStatus} />
        <CustomCard label={"Flood zone 3"} mediaContent={logo} />
        <CustomCard label={"Flood zone 3"} mediaContent={logo} />
      </Container>
    </div>
  )
}

export default App
