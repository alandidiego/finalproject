import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import './style.css';

const SearchBar = () => {

    return (
        <div>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder={"Search for crypto here"}></input>
        </div>
    )
}

export default SearchBar;