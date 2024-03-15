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
        className={css.modal}
        onRequestClose={onClose}
        >
            <div>
               {image && <img
                    className={css.img}
                    src={image.urls.regular}
                    alt={image.alt_description}
                />
                } 
            </div>
    
 </Modal>
    )
}