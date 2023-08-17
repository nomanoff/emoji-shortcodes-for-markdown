import React from "react";

function Footer() {
  let currentYear = new Date();

  return (
    <footer>
      <p> &copy; {currentYear.getFullYear()} Azizbek Nomonjonov</p>
    </footer>
  );
}

export default Footer;
