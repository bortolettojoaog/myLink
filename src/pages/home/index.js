import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";

export default function Home() {
    const [link, setLink] = useState("");
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Meu Link Logo" />
                <h1>Meu Link</h1>
                <span>Cole seu link para encurtar! 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input
                        placeholder="Cole seu link aqui..."
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <button>Gerar Link</button>
            </div>

            <Menu />

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    );
}
