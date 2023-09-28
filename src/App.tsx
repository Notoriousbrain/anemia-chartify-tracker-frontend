import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          hideProgressBar
          theme="colored"
          newestOnTop
          draggable={false}
          toastStyle={{ color: "#333333" }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
