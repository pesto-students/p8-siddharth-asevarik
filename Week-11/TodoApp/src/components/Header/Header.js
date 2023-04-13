import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Header.scss"
const Header = ({onSearchClick})=>{

    return (
        <header className="header">
            <FontAwesomeIcon icon={faSearch} />
            <input type={"text"} placeholder={"type to search for your todos..."}/>
            <button onClick={onSearchClick}>search</button>
        </header>
    );
}
Header.propTypes = {
    onSearchClick:PropTypes.func
}
export default Header;