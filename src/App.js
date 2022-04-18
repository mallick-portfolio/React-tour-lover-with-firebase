import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import Footer from "./pages/Shared/Footer/Footer";
import RequireAuth from "./pages/Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
