import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";

import "./App.css";
// import thumbnail from "../public/thumbnail.jpg";
// import index from "../public/index.html";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import Main from "./components/Main/Main.component";
import VideoPage from "./components/VideoPage/VideoPage.component";
import Contact from "./components/Contact/Contact.component";
import { videoLinks } from "./components/Main/videoLinksArray";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage.component";

const App = () => {
  const [videos, setVideos] = useState([...videoLinks].reverse());

  return (
    <div id="container">
      {/* <Helmet>
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={index} />
      </Helmet> */}
      <Navbar setVideos={setVideos} />
      <div id="main-content">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Main {...props} videos={videos} />}
          />
          <Route path="/video/:videoId" component={VideoPage} />
          <Route exact path="/contato" component={Contact} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
