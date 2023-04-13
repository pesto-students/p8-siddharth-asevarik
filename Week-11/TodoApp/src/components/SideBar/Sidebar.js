import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss"
import { useState } from "react";
import ColorDot from "./ColorDot";
import { IconButton } from "../common";
import  PropTypes  from "prop-types";
const  Sidebar = ({handleDotClick})=>{
  const [isColorDotVisible,setColorDotVisible] = useState(false);

  return (  <div className="sidebar">
        <h3>Notes</h3>
        <IconButton icon={faAdd} onButtonClick={()=>{
          setColorDotVisible(!isColorDotVisible);
        }}/>
        <ColorDot isVisible={isColorDotVisible} onDotClick={handleDotClick}/>
      </div>
  );
}
Sidebar.propTypes = {
  handleDotClick:PropTypes.func
}
export default Sidebar;