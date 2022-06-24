import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/shoppingCartContext"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className="bg-slate-900 min-h-screen overflow-x-hidden">
        <div className="max-w-5xl mx-auto w-11/12  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
