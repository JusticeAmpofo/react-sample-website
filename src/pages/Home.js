import { useState } from "react"
import Modal from "../components/Modal"

function Home() {
    const [modalAOpen, setModalAOpen] = useState(false)

    return (
        <>
            <div className="container">
                <p className="mb5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem eos doloribus cum doloremque omnis deserunt recusandae architecto dicta reprehenderit.</p>
                <button onClick={() => {setModalAOpen(true)}} className="mb5">Open Modal</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, saepe.</p>
            </div>
            {modalAOpen && <Modal closeModal={() => setModalAOpen(false)} />}
        </>
    )
}
export default Home