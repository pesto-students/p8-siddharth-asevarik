import "./ColorDot.scss";
import {colors} from "../../../Utils/constants";
import PropTypes from "prop-types";
const ColorDot = ({isVisible,onDotClick})=>{
  
  
 return (
  isVisible &&
     
       <div className="color-dot-container">
       {console.log("jflksajflksjdalfk")}
       {
        colors.map((element,index)=>{
             return   (<div className={"color-dot-"+element} onClick={()=>{onDotClick(index)}}></div> );
        })
       }
       </div>
 )
}
ColorDot.propTypes={
  isVisible:PropTypes.bool,
  onDotClick:PropTypes.func,
}

export default ColorDot;
