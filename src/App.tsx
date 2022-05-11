import { Container } from "@mui/material"
import React, { useCallback } from "react"
import "./App.css"
import logo from "./assets/card_media_view.png"
import SelectCard from "./components/SelectCard"
import { CardState } from "./shared/types"

function App() {
  const checkStatus = useCallback((status: boolean) => {
    console.log("status", status)
  }, [])

  return (
    <div className="App">
      <Container>
        <SelectCard cardState={CardState.SELECTED} label={"Flood zone 3"} image={logo} onSelect={checkStatus} />
        <SelectCard label={"Flood zone 3"} image={logo} />
        <SelectCard label={"Flood zone 3"} image={logo} />
      </Container>
    </div>
  )
}

export default App
