import Header from "./components/Header"
import { Box } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer></Footer>
      </Box>
      <ScrollToTop></ScrollToTop>
    </>
  )
}

export default App
