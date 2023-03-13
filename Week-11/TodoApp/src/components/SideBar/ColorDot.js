import "../../assets/Styles/ColorDot.scss"
import {colors} from "../../Utils/constants"
export const ColorDot = ({isVisible,onDotClick})=>{
  
  
 return isVisible ?
     (
       <div className="color-dot-container">
       {console.log("jflksajflksjdalfk")}
       {
        colors.map((element,index)=>{
             return   (<div className={"color-dot-"+element} onClick={()=>{onDotClick(index)}}></div> );
        })
       }
       </div>
    ) : (<></>); 
}