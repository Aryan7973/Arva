import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = ({message,onClose})=>{

    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={onClose}><FontAwesomeIcon icon={faXmark}/></button>
                <p>{message}</p>
            </div>
        </div>
    )
};

export default Popup;