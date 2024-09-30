import React, { useState } from 'react';
import './FeedbackReactionBar.scss';
import { createFeedbackReaction, type ReactionFeedbackDTO } from '@api/feedback_reactions';
import { ReactionsFeedback } from './FeedbackReactionBar.enum';
// Emojis e suas respectivas reações

interface ReactionBarProps extends Omit<ReactionFeedbackDTO, 'member_id'> {}

const FeedbackReactionBar: React.FC<ReactionBarProps> = ({ feedback_id, reaction }) => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  // Função para lidar com a reação clicada
  const handleReactionClick = (sreaction: string) => {
    setSelectedReaction(sreaction);

    createFeedbackReaction({ feedback_id, reaction });
  };

  return (
    <div className="reaction-bar">
      {Object.values(ReactionsFeedback).map((emoji) => (
        <span
          key={emoji}
          className={`reaction-button ${selectedReaction === emoji ? 'selected' : ''}`}
          onClick={() => handleReactionClick(emoji)}
          role="button"
          aria-label={`Reagir com ${emoji}`}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FeedbackReactionBar;