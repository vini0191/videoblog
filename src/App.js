import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Main from "./components/Main/Main.component";
import VideoPage from "./components/VideoPage/VideoPage.component";

export const App = () => (
  <>
    <Navbar />
    {/* <Link to="/">Home</Link> */}
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/video/:videoId" component={VideoPage} />
    </Switch>
    <Footer />
  </>
);

export default App;
