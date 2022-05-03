import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import VideosContainer from "./Components/VideosContainer/videosContainer";
import Footer from "./Components/Footer/footer";
import Details from "./Components/Details/details";

function App() {
  const [ongletView, setOnglet] = useState("videosView");
  return (
    <div className="App">
      <Header />
      <div className="navigation">
        <nav>
          <button
            className="buttons"
            onClick={() => setOnglet("videosView")}
            style={
              ongletView === "videosView"
                ? {
                    backgroundColor: "#433c3b",
                    color: "#FFF",
                  }
                : {
                    backgroundColor: "#FFF",
                    color: "#433c3b",
                  }
            }
          >
            Vidéos
          </button>
          <button
            className="buttons"
            onClick={() => setOnglet("detailView")}
            style={
              ongletView === "detailView"
                ? {
                    backgroundColor: "#433c3b",
                    color: "#FFF",
                  }
                : {
                    backgroundColor: "#FFF",
                    color: "#433c3b",
                  }
            }
          >
            Détails
          </button>
        </nav>
      </div>
      {ongletView === "videosView" ? <VideosContainer /> : <Details />}
      <Footer />
    </div>
  );
}

export default App;
