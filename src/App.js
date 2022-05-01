import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Divider from "./Components/Divider/divider";
import VideosContainer from "./Components/VideosContainer/videosContainer";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <VideosContainer />
      <Footer />
    </div>
  );
}

export default App;
