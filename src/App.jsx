import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Footer from "./pages/Footer";
function App() {


  return (
    <>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
