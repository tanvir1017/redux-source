import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
