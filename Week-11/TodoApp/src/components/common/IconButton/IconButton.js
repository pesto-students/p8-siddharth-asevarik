import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconButton.scss";
import PropTypes from "prop-types";
const IconButton = ({onButtonClick,icon,className=""})=>{
    return (
        <div onClick={onButtonClick} className={"icon-button " + className}>
            <FontAwesomeIcon icon={icon} fontSize={15}/>
        </div>
    );
}
IconButton.propTypes={
    onButtonClick:PropTypes.func,
    icon:PropTypes.element.isRequired,
    className:PropTypes.string
}
export default IconButton;
