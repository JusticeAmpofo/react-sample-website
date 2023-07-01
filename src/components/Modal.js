import '../styles/Modal.css'

function Modal({ closeModal }) {
    return (
        <>
            <div onClick={closeModal} className="modal__dimmer"></div>
            <div className="modal__container">
                <button onClick={closeModal} className='btn modal__btn-close'>Close</button>
                <h2 className='h2 mb5'>My modal<br className='mobile-only-block' /> content here</h2>
                <p className="mb5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem eos doloribus cum doloremque omnis deserunt recusandae architecto dicta reprehenderit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, saepe.</p>
            </div>
        </>
    )
}
export default Modal