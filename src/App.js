import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import store from "./store";
import { Provider } from "react-redux";
const HomeComponent = React.lazy(() => import("./pages/Home/home"));
const BotsDashboard = React.lazy(() =>
  import("./pages/BotDashboard/botsdashboard")
);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route path="/bots" element={<BotsDashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
