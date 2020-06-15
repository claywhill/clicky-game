import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);

function Footer() {
  return (
    <footer>
      <p>Clayton Hill &copy; {year}</p>
    </footer>
  )
}

export default Footer;