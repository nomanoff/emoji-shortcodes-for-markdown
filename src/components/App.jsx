import React from "react";
import { Toaster } from "react-hot-toast";
import Heading from "./Header/Header";
import Footer from "./Footer/Footer";
import Search from "./Searchbox";

function App() {
  return (
    <div>
      <Toaster />

      <Heading />

      <div className="main">
        <Search></Search>
      </div>

      <Footer />
    </div>
  );
}

export default App;
