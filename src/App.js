import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Main from "./components/Main/Main.component";
import VideoPage from "./components/VideoPage/VideoPage.component";

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/video/:videoId" component={VideoPage} />
    </Switch>
    <Footer />
  </>
);

export default App;
