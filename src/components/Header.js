import React from "react";

function Header() {
  return (
  <header>
    <h1>Clicky Game</h1>
    <p>Click an image to begin!</p>
    <ul>
      <li className="score">Score: 0</li>
      <li className="top-score">Top Score: 0</li>
    </ul>
  </header>
  )
}

export default Header;