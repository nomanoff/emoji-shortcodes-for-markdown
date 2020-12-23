import React  from 'react';
import useClipboard from "react-use-clipboard";


function Entry(props){


    const [isCopied, setCopied] = useClipboard(props.markdown);

  
      return(
        
          <div  onClick={setCopied} className="emoji-card">
              
                <p className="emoji">{props.img}</p>
              
              <div>
                {isCopied ? <p className="copied">copied</p> : null}
              </div>
                  
  
          </div>
      )
  }
  
  export default Entry;  