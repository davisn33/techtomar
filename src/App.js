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

function App() {
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
          <Route path="/product">
            <Products/>
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
