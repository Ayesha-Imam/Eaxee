import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import RequestDemo from "../Pages/RequestDemo";
import Contact from '../Pages/Contact';
import Resources from "../Pages/Resources";
import Error from "../Pages/Error";
import Blog from "../Pages/Resources/Blogs/Blog";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Event from "../Pages/Resources/Events/Event";
import Whitepaper from "../Pages/Resources/Whitepaper/Whitepaper";
import Documentation from "../Pages/Resources/Documentation/Documentation";

const MainRoutes = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/requestDemo'];

  const isErrorPage = location.pathname !== '/' &&
    !hideNavbarRoutes.includes(location.pathname) &&
    !['/contact', '/blog', '/events', '/whitepaper', '/documentation'].includes(location.pathname) &&
    !location.pathname.startsWith('/resources');

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && !isErrorPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requestDemo" element={<RequestDemo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Event />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideNavbarRoutes.includes(location.pathname) && !isErrorPage && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

export default App;
