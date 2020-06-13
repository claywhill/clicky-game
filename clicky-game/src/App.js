import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/Sub-header";
import Main from "./components/Main";
import images from "./images.json";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      {images.map(newImage => 
        <Main image={newImage.image} />)}
    </div>
  )
}

export default App;