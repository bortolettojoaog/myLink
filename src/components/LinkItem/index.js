import { FiX } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import './link-item.css';

export default function LinkItem({ closeModal, content }) {
    
    async function copyLink() {
        await navigator.clipboard.writeText(content.link);
        alert("URL copiada com sucesso!");
    }

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={ closeModal }>
                    <FiX size={ 28 } color="#000" />
                </button>
            </div>

            <span>{ content.long_url }</span>

            <button className="modal-link" onClick={ copyLink }>
                { content.link }
                <BiCopy size={ 20 } color="#FFF" />
            </button>
        </div>
    )
}