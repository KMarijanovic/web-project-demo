import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopContextProvider from './context/ShopContext';

/* styles */
import "./App.css"

/* cookie consent bar */
/* DON'T FORGET TO REMOVE THE DEBUG PROPERTY FOR PRODUCTION! */
import CookieConsent from "react-cookie-consent";

/* page components */
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

/* pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Search from "./pages/Search";
import Cart from "./pages/cart/Cart";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import ShadePlants from "./pages/ShadePlants";
import EasyCare from "./pages/EasyCare";
import PetFriendly from "./pages/PetFriendly";
import AirPurifying from "./pages/AirPurifying";
import AllIndoors from "./pages/AllIndoors";

/* hooks */
import { useState, useEffect } from "react";

function App() {
  const [timedPopup, setTimedPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 20000);
  }, []);

  return (
    <div className="App">
      <CookieConsent debug={true}
        enableDeclineButton
        flipButtons
        onDecline={() => { alert("Declined!") }}
        declineButtonText="Decline"
        declineButtonStyle={{ background: "#fbcb6f", color: "#0C1618", fontSize: "16px", borderRadius: "10px" }}
        buttonText="Accept"
        location="bottom"
        cookieName="mySweetCookies"
        expires={1}
        style={{ background: "#0C1618", color: "#c9f9d6" }}
        buttonStyle={{ background: "#c9f9d6", color: "#0C1618", fontSize: "16px", borderRadius: "10px" }}
        overlay
      >This site uses cookies to enhance the user experience.
        <span style={{ fontSize: "10px", color: "#fbcb6f", marginLeft: "10px" }}>This is not real - it's just the design.</span>
      </CookieConsent>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />

      <ShopContextProvider>
        <BrowserRouter>
          <Announcement />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/news/all" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/shadetolerant" element={<ShadePlants />} />
            <Route path="/easycare" element={<EasyCare />} />
            <Route path="/petfriendly" element={<PetFriendly />} />
            <Route path="/airpurifying" element={<AirPurifying />} />
            <Route path="/allindoors" element={<AllIndoors />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
