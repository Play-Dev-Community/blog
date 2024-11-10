import React, { useState, useEffect } from 'react';

import type { DiscordUserData } from '@api/discord';
import { getUserData } from '@utils/user.utils';

import './Feedbacks.scss';
import { readFeedbacks, type Feedback } from '@api/feedbacks';
import PaginatedFeedbacks from './PaginatedFeedback';

const Feedbacks: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [memberID, setMemberID] = useState<string | null>(null);
  const [readyToRender, setReadyToRender] = useState<boolean>(false);

  useEffect(() => {
    const storedUser: DiscordUserData = getUserData();

    if (storedUser) {
      setMemberID(storedUser.id);
    }
  }, []);

  useEffect(() => {
    if (memberID) {
      fetchFeedbacks();
    }
  }, [memberID]);

  const fetchFeedbacks = () => {
    readFeedbacks(memberID!).then(res => {
      setFeedbacks(res);
      setReadyToRender(true);
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className='feedbacks-container'>
      <div className='feedbacks'>

        {readyToRender ?
          feedbacks.length ?
            <PaginatedFeedbacks feedbacks={feedbacks} />
            : (
              'Você ainda não recebeu nenhum feedback.'
            ) : (
            <>
              <div className='skeleton-wrapper'>
                <div className="feedback-skeleton"></div>
                <div className="feedback-skeleton"></div>
              </div>

              <div className='skeleton-wrapper'>
                <div className="feedback-skeleton"></div>
                <div className="feedback-skeleton"></div>
              </div>

              <div className='skeleton-wrapper'>
                <div className="feedback-skeleton"></div>
                <div className="feedback-skeleton"></div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Feedbacks;
