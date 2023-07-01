import { useState, useEffect } from "react"
import Modal from "../components/Modal"

function Home() {
    const [modalAOpen, setModalAOpen] = useState(false)

    useEffect(() => {
        if (modalAOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalAOpen])
    

    return (
        <>
            <div className="container">
                <p className="mb5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae laoreet ligula. Quisque tempor nunc vel ante rutrum, ut mollis ipsum scelerisque. Sed in consectetur erat. Quisque neque leo, efficitur et pretium at, elementum in augue. Aenean vel ex pretium, sodales dolor sit amet, varius massa. Donec gravida sapien purus. Nullam volutpat faucibus fermentum. Nam et tortor id massa vestibulum tincidunt. Vivamus at diam vel nisl ornare ullamcorper at quis neque. Aliquam sit amet neque facilisis sem bibendum porta. Nullam sed dapibus leo, scelerisque egestas purus. In ut velit eget ex dapibus mollis eget et sapien. Quisque consequat lacus a ipsum porta, eget fermentum purus elementum.</p>
                <button onClick={() => {setModalAOpen(true)}} className="mb5">Open Modal</button>
                <p className="mb5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ornare tortor dignissim, viverra tellus vitae, cursus risus. Curabitur accumsan augue tempus, molestie massa quis, rhoncus nibh. Integer auctor neque eu elit vulputate malesuada. Proin id mattis risus, ut dictum ligula. Morbi eget tristique dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ac volutpat leo. Maecenas cursus sapien eget leo aliquam bibendum. Sed porta ante ante, in varius erat interdum eget. Proin finibus diam quis aliquet ultricies. Etiam sed velit id eros laoreet congue sit amet non magna. Sed in dapibus nisl. Cras velit orci, viverra a diam eget, lacinia pulvinar eros.</p>
                <p className="mb5">Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla euismod nunc arcu, in venenatis risus fermentum non. Duis blandit nulla eu arcu consequat, vel malesuada nibh varius. Aenean consectetur interdum metus eu sagittis. Nulla sit amet leo in quam lacinia malesuada. Suspendisse potenti. Sed nec turpis eu enim ornare auctor non id augue. Integer consectetur porta turpis sit amet finibus. Cras rhoncus pharetra magna nec mollis.</p>
                <p className="mb5">Mauris sed mauris sapien. Donec diam ex, ultrices vel blandit vel, porta nec nisi. Nulla ornare nibh orci, non lobortis arcu elementum a. Aliquam neque ex, hendrerit id eros eu, pharetra gravida nisi. In hac habitasse platea dictumst. Sed commodo mauris sit amet justo tincidunt, mattis mollis eros laoreet. In justo leo, tincidunt nec sagittis quis, commodo at ligula. Duis consectetur dictum orci.</p>
                <p className="mb5">Integer eu nisl laoreet, fermentum enim non, iaculis eros. Quisque hendrerit luctus nulla, sit amet convallis enim pharetra in. Donec dolor massa, ultrices vitae ultricies id, efficitur eget mauris. Sed laoreet blandit ex, quis sodales nibh egestas accumsan. Nunc porta eros viverra consequat bibendum. Donec vestibulum turpis sed sodales maximus. Duis faucibus viverra dapibus. Maecenas pellentesque libero sed est blandit, nec efficitur mi dapibus. In hendrerit tortor orci, sed porttitor velit laoreet posuere. Donec varius leo eget tincidunt semper. Suspendisse at elementum felis, eget pellentesque libero. Suspendisse interdum tempus odio finibus efficitur. Vestibulum ut nisi tellus. Etiam rutrum volutpat est quis porttitor.</p>
                <p className="mb5">Sed massa risus, feugiat vel neque sed, facilisis elementum eros. Proin vestibulum lobortis sem nec varius. Aenean congue nibh nisi. Sed in libero neque. Vestibulum consequat congue ex, eu finibus ligula sodales a. Vestibulum semper, magna eu dapibus accumsan, sem velit efficitur est, sed bibendum orci dolor at urna. Duis elit metus, vehicula et mattis dictum, euismod venenatis metus. Nulla sapien dui, consectetur et volutpat tincidunt, elementum et purus. Suspendisse mauris odio, dignissim eget egestas id, accumsan at nisi. Sed facilisis, urna quis fringilla tincidunt, turpis risus faucibus ante, id maximus massa augue a est. Proin tristique justo id dolor gravida, a eleifend purus mollis. Suspendisse laoreet nisl ut nulla accumsan tincidunt. Aenean a mi a sapien faucibus ultricies non varius elit.</p>
            </div>
            {modalAOpen && <Modal closeModal={() => setModalAOpen(false)} />}
        </>
    )
}
export default Home