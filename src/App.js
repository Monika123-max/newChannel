import "./styles.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HigherOrderComponent from "./HigherOrderComponent";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="sidenav">
          <Link to="/channel1">Channel 1</Link>
          <Link to="/channel2">Channel 2</Link>
        </nav>
        <Outlet />
        <Routes>
          <Route path="channel1" element={<HigherOrderComponent />} />
          <Route path="channel2" element={<HigherOrderComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
