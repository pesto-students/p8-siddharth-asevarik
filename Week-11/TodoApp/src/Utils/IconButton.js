import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Styles/IconButton.scss";
export const IconButton = ({onButtonClick,icon,className=""})=>{
    return (
        <div onClick={onButtonClick} className={"icon-button " + className}>
            <FontAwesomeIcon icon={icon} fontSize={15}/>
        </div>
    );
}