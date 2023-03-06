import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Styles/Header.scss"
export const Header = ({onSearchClick})=>{

    return (
        <header className="header">
            <FontAwesomeIcon icon={faSearch} />
            <input type={"text"} placeholder={"type to search for your todos..."}/>
            <button onClick={onSearchClick}>search</button>
        </header>
    );
}