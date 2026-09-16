import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import MobileStoreLayout from "./component/MobileStoreLayout";
import MainHeader from "./component/MainHeader";
import Header from "./component/Header";
import MainBanner from "./component/MainBanner";
import Navbar from "./component/Navbar";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Footer from "./component/Footer";
import ContactPage from "./component/ContactPage";

function MainLayout() {
  return (
    <>
      {/* <MainHeader /> */}
      <Header />
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
