import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import BotsDashboard from "./pages/botsdashboard";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bots" component={BotsDashboard} />
      </Switch>
    </Router>
  );
}
export default App;
