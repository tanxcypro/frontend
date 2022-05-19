import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import DetailUser from "./pages/DetailUser";
import Registrasi from"./pages/Registrasi"

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        
        <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <ul class="nav justify-content-end">
  <li class="nav-item">
  <Link className="nav-link" to="/">Home</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link" to="/about">About</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link" to="/profile">Profile</Link>
  </li>
  <li class="nav-item">
  <Link className="nav-link" to="/registrasi">registrasi</Link>
  </li>
</ul>
      
         
        
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/registrasi" element={<Registrasi />} />
        {/* protect this routes with <PrivateRoute> */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/users/:id" element={<DetailUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;