import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import AddBlog from "./Components/AddBlog";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Clock from "./Components/Clock";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <Routes path="/">
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddBlog />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
