import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Main from "./components/Main/Main.component";
import VideoPage from "./components/VideoPage/VideoPage.component";
import Contact from "./components/Contact/Contact.component";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage.component";

const App = () => (
  <div id="container">
    <Navbar />
    <div id="main-content">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/video/:videoId" component={VideoPage} />
        <Route exact path="/contato" component={Contact} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
