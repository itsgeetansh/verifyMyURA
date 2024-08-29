import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import CardDeatils from './Pages/CardDetails';
import GetCertificate from './Pages/GetCertificate';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Services' element={<Services/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/GetCertificate" element={<GetCertificate/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/card-details/:title' element={<CardDeatils/>}/>
        </Routes>
      </div>
  );
}

export default App;
