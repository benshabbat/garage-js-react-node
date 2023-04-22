import Register from "./pages/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import { ToastContainer } from "react-toastify";
import Account from "./pages/account/Account.jsx";
import "react-toastify/dist/ReactToastify.css";
import Services from "./pages/services/Services.jsx";
import Messages from "./pages/messages/Messages.jsx";
import PageLanding from "./pages/pageLanding/PageLanding.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/services/user/" element={<Services />} />
          <Route path="/services/car/:carId" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;
