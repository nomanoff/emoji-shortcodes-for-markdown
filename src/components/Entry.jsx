import React  from 'react';
import useClipboard from "react-use-clipboard";


function Entry(props){


    const [isCopied, setCopied] = useClipboard(props.markdown);
  
      return(
          <div className="term">
          
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">{props.img}</span>
              <h3 className="description">{props.name}</h3>
            </dt>
  
            <dd className="copy-button">
            <button onClick={setCopied}>
                     {isCopied ? "copied 😉" : "copy 🙂"}
            </button>
            </dd>
  
  
  
          </div>
      )
  }
  
  export default Entry;  