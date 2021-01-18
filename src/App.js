import React from "react"
import './App.css';
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App(){
  return (
    <Router>
  <div>
    <Wrapper>
    <Header />
    <Route exact path="/search" component={Search} />
    </Wrapper>
  </div>
  </Router>
)
}
  

export default App;
