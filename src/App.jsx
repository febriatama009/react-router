import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <div className="App">
      <Navbar /> <br /> <br />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </div>
  );
}

export default App;
