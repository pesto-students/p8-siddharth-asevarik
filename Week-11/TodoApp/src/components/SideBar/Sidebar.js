import { IconButton } from "../../Utils/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { ColorDot } from "./ColorDot";
import "../../assets/Styles/SideBar.scss"
import { useState } from "react";
export const Sidebar = ({handleDotClick})=>{
  const [isColorDotVisible,setColorDotVisible] = useState(false);

  return (  <div className="sidebar">
        <h3>Docket</h3>
        <IconButton icon={faAdd} onButtonClick={()=>{
          setColorDotVisible(!isColorDotVisible);
        }}/>
        <ColorDot isVisible={isColorDotVisible} onDotClick={handleDotClick}/>
      </div>
  );
}