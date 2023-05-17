import React from "react";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
