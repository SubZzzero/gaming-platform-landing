import Header from "./components/Header"
import { Box } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop"
function App() {


  return (
    <>
      <Header></Header>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer></Footer>
      </Box>
      <ScrollToTop></ScrollToTop>
    </>
  )
}

export default App
