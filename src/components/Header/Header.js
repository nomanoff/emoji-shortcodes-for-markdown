import React from "react";
import { HEADER_WRAPPER } from "./style";

function Header(props) {
  return (
    <HEADER_WRAPPER>
      <h1>Markdown Emoji Codes</h1>
      <div className="sub-header">
        <h6>FIND YOUR FAVORITE ONE AND COPY WITH JUST ONE CLICK</h6>
        <div className="github-stat">
          <a
            className="git-star"
            href="https://github.com/aliabdulazeez/emoji-shortcodes-for-markdown"
          >
            {" "}
            <i className="fab fa-github"></i> Star
          </a>
          <a
            className="git-fork"
            href="https://github.com/login?return_to=%2Faliabdulazeez%2Femoji-shortcodes-for-markdown"
          >
            {" "}
            <i className="fas fa-code-branch"></i> Fork
          </a>
        </div>
      </div>
    </HEADER_WRAPPER>
  );
}

export default Header;
