import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineFork } from "react-icons/ai";

import {
  HEADER_WRAPPER,
  HEADER_CONTAINER,
  SUB_HEADER,
  GITHUB_STAT,
} from "./style";

function Header(props) {
  return (
    <HEADER_WRAPPER>
      <HEADER_CONTAINER>
        <SUB_HEADER>
          <h1>Markdown Emoji Codes</h1>
          <h6>FIND YOUR FAVORITE ONE AND COPY WITH JUST ONE CLICK</h6>
        </SUB_HEADER>

        <GITHUB_STAT>
          <a href="https://github.com/aliabdulazeez/emoji-shortcodes-for-markdown">
            <DiGithubBadge size={20} />
            &nbsp;Star
          </a>

          <a href="https://github.com/login?return_to=%2Faliabdulazeez%2Femoji-shortcodes-for-markdown">
            <AiOutlineFork size={20} />
            &nbsp;Fork
          </a>
        </GITHUB_STAT>
      </HEADER_CONTAINER>
    </HEADER_WRAPPER>
  );
}

export default Header;
