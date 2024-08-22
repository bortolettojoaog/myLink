import { BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
    return (
        <div className="menu">
            <a
                target="_blank"
                className="social"
                href="https://www.youtube.com"
                rel="noreferrer"
            >
                <BsYoutube color="#FFF" size={24} />
            </a>

            <a
                target="_blank"
                className="social"
                href="https://www.instagram.com"
                rel="noreferrer"
            >
                <BsInstagram color="#FFF" size={24} />
            </a>

            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}
