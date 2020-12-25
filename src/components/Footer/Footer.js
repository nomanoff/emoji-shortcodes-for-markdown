import React from "react";
import { FOOTER_WRAPPER } from "./style";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  return (
    <FOOTER_WRAPPER>
      <p> &copy; {currentYear} Ali Adam</p>
    </FOOTER_WRAPPER>
  );
}

export default Footer;
