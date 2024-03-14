import css from "./ImageModal.module.css";
import Modal from 'react-modal';
Modal.setAppElement('#root');
export default function ImageModal({ onOpen, onClose, image }) {
  const customStyle = {
  overlay: {
    backgroundColor: "#414141b2"
  },
};
    return (
  <Modal
            isOpen={onOpen}
            style={customStyle}
        className={css.customStyle}
        onRequestClose={onClose}
        >
            <div>
               {image && <img
                    className={css.modal}
                    src={image.urls.regular}
                    alt={image.alt_description}
                />
                } 
            </div>
    
 </Modal>
    )
}