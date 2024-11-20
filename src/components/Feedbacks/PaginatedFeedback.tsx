import { useState } from 'react';

import './Feedbacks.scss';
import type { Feedback } from '@api/feedbacks';

const PaginatedFeedbacks = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 5;

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  const prev = currentPage > 1 ? "" : "disabled";
  const next = currentPage < totalPages ? "" : "disabled";

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='flex flex-col justify-between h-full'>
      {currentFeedbacks.map(feedback => (
        <div className='mb-10 sm:mb-5' key={`${feedback.user_id}_${feedback.datetime}`}>
          <h2 className='text-lg font-bold'>{feedback.title}</h2>
          <p>{feedback.text}</p>
          <small className='opacity-50'>
            {feedback.author} • {new Date(feedback.datetime).toLocaleDateString('pt-BR', dateOptions)}
          </small>

          <div className='max-w-[120px] sm:max-w-[200px]'>
            {/* <FeedbackReactionBar /> */}
          </div>

        </div>
      ))}

      {
        feedbacks.length >= feedbacksPerPage &&
        <div className="pagination-wrapper">
          <button
            onClick={handlePrevPage}
            disabled={prev === 'disabled'}
            className={`mr-4 ${prev}`}
            aria-label='Anterior'
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
            </svg>
            Ant.
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={next === 'disabled'}
            className={`ml-4 ${next}`}
            aria-label='Próximo'
          >
            Próx.
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </button>
        </div>
      }
    </div>
  );
};

export default PaginatedFeedbacks;