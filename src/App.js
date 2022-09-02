import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gellary from "./pages/Gellary";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gallery" element={<Gellary />}/>
        <Route path="/plans" element={<Plans />}/>
        <Route path="/trainers" element={<Trainers />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
