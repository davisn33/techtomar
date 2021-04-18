import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Startproject from "./Components/Home/Startproject";
import Home from "./Screens/Home"
import About from "./Screens/About"
import Privacy from "./Screens/Privacy"
import Products from "./Screens/Products"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ServicesPage from "./Screens/Services";
import Cookies from "./Screens/Cookies";
import React from "react"

function App() {
  React.useEffect(()=>{
    if(!localStorage.getItem("lang"))
      localStorage.setItem("lang","en")
  },[])
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/services">
            <ServicesPage/>
          </Route>
          <Route path="/product">
            <Products/>
          </Route>
          <Route path="/cookies">
            <Cookies/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      <Startproject/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
