import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App(){
  return(
    <div>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  )
}

export default App;