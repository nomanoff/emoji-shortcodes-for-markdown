import React  from 'react';
import useClipboard from "react-use-clipboard";


function Entry(props){


    const [isCopied, setCopied] = useClipboard(props.markdown, {
      successDuration: 300,
    });

    
  
      return(
        
          <div  onClick={setCopied} className="emoji-card">
              
                
              
              <div>
                {isCopied ? null : <p className="emoji">{props.img}</p>}
              </div>

              <div>
                {isCopied ? <p className="copied"><i className="fas fa-clipboard"></i></p> : null}
              </div>
                  
  
          </div>
      )
  }
  
  export default Entry;  