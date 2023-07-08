import { useEffect } from 'react';
import '../styles/Modal.css';

function Modal({ isOpen, closeModal, content }) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div onClick={closeModal} className='modal__dimmer'></div>
            <div className='modal__container'>
                <button onClick={closeModal} className='btn modal__btn-close'>
                    Close
                </button>
                {content}
            </div>
        </>
    );
}
export default Modal;
