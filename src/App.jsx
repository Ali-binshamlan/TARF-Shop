// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import ProtectedRouter from "./context/ProtectedRouter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route
        path="/cart"
        element={
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
        }
      />
    </Routes>
  );
}
