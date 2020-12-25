import React  from 'react';
import useClipboard from "react-use-clipboard";
import toast from "react-hot-toast";

function Entry(props){


    const [isCopied, setCopied] = useClipboard(props.markdown, {
      successDuration: 400,      
    });

    const copyProcess = () => {
      setCopied();
      toast.success("Copied!", {
          style: {
            border: "1px solid #F5BA13",
            padding: "16px",
            color: "#F5BA13"
          },
          iconTheme: {
            primary: "#F5BA13",
            secondary: "#FFFAEE"
          }
        }
      )
    }
    
  
      return(
        
          <div  onClick={copyProcess} className="emoji-card">
              
                
              
              <div>
                {isCopied ? null : <p className="emoji">{props.img}</p>}
              </div>

              <div>
                {isCopied && <p className="copied"><i className="fas fa-clipboard"></i></p>}
              </div>
                  
  
          </div>
      )
  }
  
  export default Entry;  