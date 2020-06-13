import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/Sub-header";
import Main from "./components/Main";
import images from "./images.json";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="main">
        {images.map(newImage => 
          <Main image={newImage.image} />)}
      </div>
      <Footer />
    </div>
  )
}

export default App;