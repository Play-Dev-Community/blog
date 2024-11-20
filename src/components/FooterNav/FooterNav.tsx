import { useState } from 'react';
import './FooterNav.scss';
import Modal from '@components/Modal/Modal';

const FooterNav: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPolitica, setModalPolitica] = useState(false);
  const [modalTermos, setModalTermos] = useState(false);

  // const openModalPolitica = () => {
  //   setModalPolitica(true);
  //   openModal();
  // }

  // const openModalTermos = () => {
  //   setModalTermos(true);
  //   openModal();
  // }

  // const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setModalPolitica(false);

    setModalTermos(false);

    setIsModalOpen(false);
  }

  return (
    <>
      <nav className='w-full sm:w-auto'>
        <ul className="flex items-center gap-2 leading-3">
          <li>
            <a href="/sobre/" className="link">Sobre</a>
          </li>
          {/* <li className="link border-x-2 px-2" onClick={openModalPolitica}>Política de Privacidade</li>
          <li className="link" onClick={openModalTermos}>Termos de Uso</li> */}
        </ul>

      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} title='Alo' description='Aooo'>
        {
          modalPolitica && 'kkk'
        }

        {
          modalTermos && 'sdfsafdf'
        }
      </Modal>
    </>
  );

};

export default FooterNav;

