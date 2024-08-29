import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Offerings from "./pages/Offerings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
