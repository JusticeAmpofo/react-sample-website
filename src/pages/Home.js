import { useContext } from 'react';
import Modal from '../components/Modal';
import ModalContentA from '../content/modalContent/ModalContentA';
import Tabs from '../components/Tabs';
import tabA from '../content/tabContent/tabA';
import '../styles/Home.css';

import ModalContext from '../context/modal/ModalContext';

function Home() {
    const { modalIsOpen, modalContent, openModal, closeModal } =
        useContext(ModalContext);

    return (
        <>
            <div className='container home'>
                <p className='mb5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vitae laoreet ligula. Quisque tempor nunc vel ante
                    rutrum, ut mollis ipsum scelerisque. Sed in consectetur
                    erat. Quisque neque leo, efficitur et pretium at, elementum
                    in augue. Aenean vel ex pretium, sodales dolor sit amet,
                    varius massa. Donec gravida sapien purus. Nullam volutpat
                    faucibus fermentum. Nam et tortor id massa vestibulum
                    tincidunt. Vivamus at diam vel nisl ornare ullamcorper at
                    quis neque. Aliquam sit amet neque facilisis sem bibendum
                    porta. Nullam sed dapibus leo, scelerisque egestas purus. In
                    ut velit eget ex dapibus mollis eget et sapien. Quisque
                    consequat lacus a ipsum porta, eget fermentum purus
                    elementum.
                </p>
                <button
                    onClick={() => {
                        openModal(<ModalContentA />);
                    }}
                    className='btn mb5'
                >
                    Open Modal
                </button>
                <p className='mb5'>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Phasellus ornare tortor
                    dignissim, viverra tellus vitae, cursus risus. Curabitur
                    accumsan augue tempus, molestie massa quis, rhoncus nibh.
                    Integer auctor neque eu elit vulputate malesuada. Proin id
                    mattis risus, ut dictum ligula. Morbi eget tristique dui.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Cras ac volutpat leo.
                    Maecenas cursus sapien eget leo aliquam bibendum. Sed porta
                    ante ante, in varius erat interdum eget. Proin finibus diam
                    quis aliquet ultricies. Etiam sed velit id eros laoreet
                    congue sit amet non magna. Sed in dapibus nisl. Cras velit
                    orci, viverra a diam eget, lacinia pulvinar eros.
                </p>
                <p className='mb5'>
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Nulla euismod nunc arcu, in venenatis risus
                    fermentum non. Duis blandit nulla eu arcu consequat, vel
                    malesuada nibh varius. Aenean consectetur interdum metus eu
                    sagittis. Nulla sit amet leo in quam lacinia malesuada.
                    Suspendisse potenti. Sed nec turpis eu enim ornare auctor
                    non id augue. Integer consectetur porta turpis sit amet
                    finibus. Cras rhoncus pharetra magna nec mollis.
                </p>
                <Tabs tabs={tabA} />
                <p className='mb5'>
                    Mauris sed mauris sapien. Donec diam ex, ultrices vel
                    blandit vel, porta nec nisi. Nulla ornare nibh orci, non
                    lobortis arcu elementum a. Aliquam neque ex, hendrerit id
                    eros eu, pharetra gravida nisi. In hac habitasse platea
                    dictumst. Sed commodo mauris sit amet justo tincidunt,
                    mattis mollis eros laoreet. In justo leo, tincidunt nec
                    sagittis quis, commodo at ligula. Duis consectetur dictum
                    orci.
                </p>
                <p className='mb5'>
                    Integer eu nisl laoreet, fermentum enim non, iaculis eros.
                    Quisque hendrerit luctus nulla, sit amet convallis enim
                    pharetra in. Donec dolor massa, ultrices vitae ultricies id,
                    efficitur eget mauris. Sed laoreet blandit ex, quis sodales
                    nibh egestas accumsan. Nunc porta eros viverra consequat
                    bibendum. Donec vestibulum turpis sed sodales maximus. Duis
                    faucibus viverra dapibus. Maecenas pellentesque libero sed
                    est blandit, nec efficitur mi dapibus. In hendrerit tortor
                    orci, sed porttitor velit laoreet posuere. Donec varius leo
                    eget tincidunt semper. Suspendisse at elementum felis, eget
                    pellentesque libero. Suspendisse interdum tempus odio
                    finibus efficitur. Vestibulum ut nisi tellus. Etiam rutrum
                    volutpat est quis porttitor.
                </p>
                <p className='mb5'>
                    Sed massa risus, feugiat vel neque sed, facilisis elementum
                    eros. Proin vestibulum lobortis sem nec varius. Aenean
                    congue nibh nisi. Sed in libero neque. Vestibulum consequat
                    congue ex, eu finibus ligula sodales a. Vestibulum semper,
                    magna eu dapibus accumsan, sem velit efficitur est, sed
                    bibendum orci dolor at urna. Duis elit metus, vehicula et
                    mattis dictum, euismod venenatis metus. Nulla sapien dui,
                    consectetur et volutpat tincidunt, elementum et purus.
                    Suspendisse mauris odio, dignissim eget egestas id, accumsan
                    at nisi. Sed facilisis, urna quis fringilla tincidunt,
                    turpis risus faucibus ante, id maximus massa augue a est.
                    Proin tristique justo id dolor gravida, a eleifend purus
                    mollis. Suspendisse laoreet nisl ut nulla accumsan
                    tincidunt. Aenean a mi a sapien faucibus ultricies non
                    varius elit.
                </p>
                <p className='mb5'>
                    Quisque vitae augue id risus pulvinar tincidunt a eu turpis.
                    Maecenas nec dolor in lorem molestie tincidunt eget et
                    ipsum. Mauris et mi nec orci posuere pulvinar quis a purus.
                    Phasellus et rhoncus massa. Curabitur id auctor ligula. Cras
                    ornare arcu sit amet porta sollicitudin. Aliquam a eros
                    finibus, elementum sem vitae, posuere nisi. Duis dignissim
                    vitae elit at accumsan. Cras ut dolor vitae felis euismod
                    sagittis sit amet ut eros. Sed ut ante nec lacus euismod
                    volutpat vel laoreet massa. Nam malesuada vulputate sem, ut
                    commodo enim elementum quis. Morbi mollis dolor eu dolor
                    auctor, eu tempus risus laoreet.
                </p>
                <p className='mb5'>
                    Sed in cursus ipsum. Vivamus lacus turpis, lobortis aliquet
                    posuere non, fermentum in enim. Pellentesque et ligula
                    tincidunt, faucibus dolor id, molestie turpis. Praesent
                    dolor dolor, aliquet vel sodales eget, mollis et lacus.
                    Suspendisse non urna nibh. Nullam et eleifend est, ac
                    faucibus nisl. Nullam at elit vel magna consequat sagittis.
                    Sed ultricies suscipit luctus. In porttitor viverra
                    elementum. Ut varius arcu in dui interdum dignissim.
                    Suspendisse nec dictum urna. Fusce a lorem at nunc dictum
                    efficitur ut quis enim. Integer vel nisl a dolor consectetur
                    faucibus. In porta lorem sit amet eros hendrerit rutrum.
                </p>
                <p className='mb5'>
                    Curabitur a rutrum turpis. Aliquam facilisis luctus ornare.
                    Mauris varius, enim ac vehicula gravida, neque mauris dictum
                    neque, quis tempor quam nisl ultricies libero. Pellentesque
                    nunc mauris, volutpat ut turpis sed, scelerisque eleifend
                    nisi. Phasellus efficitur mattis orci. Duis orci metus,
                    faucibus eget enim et, placerat sollicitudin nibh.
                    Vestibulum ut auctor est, sit amet consectetur nibh. Etiam
                    luctus ultricies tempus. Duis nec aliquet magna. In aliquam
                    vitae mauris ut finibus. Phasellus gravida, nibh sed lacinia
                    molestie, lorem enim viverra massa, nec vehicula massa eros
                    vitae turpis. Nulla neque nunc, convallis ac interdum sit
                    amet, blandit eu erat. In et mauris id diam laoreet pretium
                    et quis urna. Aliquam eu egestas odio. Donec non ultricies
                    est.
                </p>
                <p className='mb5'>
                    Cras finibus eros metus, eget eleifend metus interdum vitae.
                    Aliquam auctor sapien sit amet est eleifend ullamcorper.
                    Donec viverra ligula nec mi posuere lobortis ac sed orci.
                    Etiam egestas ipsum quis libero ullamcorper, eget
                    consectetur eros eleifend. Vestibulum maximus suscipit
                    neque, faucibus facilisis erat interdum in. Suspendisse
                    lacinia, neque non maximus ornare, sem diam vulputate
                    sapien, quis pellentesque est eros eu magna. Aliquam
                    pulvinar molestie lacus, nec auctor nulla aliquet sed. Duis
                    sed magna pretium, posuere eros quis, tincidunt justo. Fusce
                    laoreet mauris lorem. In hac habitasse platea dictumst.
                    Nulla facilisi.
                </p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                closeModal={() => closeModal()}
                content={modalContent}
            />
        </>
    );
}
export default Home;
