import React from "react";

function Header(props) {
  return(
  <header>
    <h1>Clicky Game</h1>
    <p>Click an image to begin!</p>
    <ul>
      <li className="score">Score: {props.score}</li>
      <li className="top-score">Top Score: {props.topScore}</li>
    </ul>
  </header>
  )
}

export default Header;