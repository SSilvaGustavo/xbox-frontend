import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JwtHandler } from "../jwt-handler/JwtHandler";

import "./Header.css"

export default function Header() {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

    useEffect(() => {
        const handleJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid())
        };

        window.addEventListener("onJwtChange", handleJwtChange);

        return() => {
            window.removeEventListener("onJwtChange", handleJwtChange)
        }

    }, []);

    return(
        <header className="header">
            <Link to="/">
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png" alt="Xbox's Logo" />
            </Link>
            <Link to="/">Home</Link>
            {isLogged ? ( <Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>) }
        </header>


    )
}