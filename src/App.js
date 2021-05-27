import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Shop from "./components/Shop";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}
 
export default App;