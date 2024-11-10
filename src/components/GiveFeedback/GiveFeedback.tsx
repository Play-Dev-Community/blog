import { useState } from 'react';
import './GiveFeedback.scss';
import Modal from '@components/Modal/Modal';
import { createFeedback, type Feedback } from '@api/feedbacks';
import { getUserData } from '@utils/user.utils';

const GiveFeedback: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {

    setIsModalOpen(true);

  };
  const closeModal = () => setIsModalOpen(false);

  const submitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const feedback: Feedback = {
      user_id: '368226888793063435',
      author: getUserData().global_name,
      title: formData.get("title") as string || `Feedback de ${getUserData().global_name}`,
      text: formData.get("message") as string,
      datetime: Date.now()
    };

    document.getElementsByClassName('feedback-submit')[0].setAttribute('disabled', 'true');

    await createFeedback(feedback);

    document.getElementsByClassName('feedback-submit')[0].removeAttribute('disabled');
  };

  return (
    <>
      <div className="flex flex-col mb-4 gap-1 sm:mb-0">
        <button
          className="rounded-sm border-2 border-skin-accent px-4 py-2 text-skin-accent transition ease-in hover:bg-skin-accent hover:text-skin-base" onClick={openModal}>
          Feedback do Aluno
        </button>
        <span className="text-sm text-skin-base opacity-60">
          Dê um feedback diretamente para o seu mentor.
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Feedback do Aluno" description='Escreva aqui suas ideias, sugestões ou elogios para o seu mentor.'>
        <form className="feedback-form" onSubmit={submitFeedback}>

          <input className='feedback-input' type="text" name="title" id="title" placeholder='Título do Feedback (Opcional)' maxLength={50} />

          <textarea className='feedback-textarea' name="message" id="message" placeholder='Sua mensagem...' required minLength={20}></textarea>

          <button className='feedback-submit' type='submit'>Enviar</button>
        </form>
      </Modal>
    </>
  );

};

export default GiveFeedback;