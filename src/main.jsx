import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter keeps track of the different link we have
      and is needed when using components from react-dom */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
