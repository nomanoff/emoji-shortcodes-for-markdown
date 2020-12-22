import React  from 'react';
// import useClipboard from "react-use-clipboard";


function Entry(props){


    // const [isCopied, setCopied] = useClipboard(props.markdown);
  
      return(
          <div className="term">
          
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">{props.img}</span>
              <span>{props.name}</span>
            </dt>
  
            <dd>
              {props.meaning}
            </dd>
  
            <dd>
            {/* <button onClick={setCopied}>
                    Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
            </button> */}
            </dd>
  
  
  
          </div>
      )
  }
  
  export default Entry;  