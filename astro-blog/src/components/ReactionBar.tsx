import React, { useState } from 'react';
import './ReactionBar.scss';
// Emojis e suas respectivas reações
const emojis = ['👍', '👎', '❤️', '😂', '😡'];

interface ReactionBarProps {
  // Adicione props aqui se necessário, por exemplo, uma função de callback ou dados do banco
}

const ReactionBar: React.FC<ReactionBarProps> = () => {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  // Função para lidar com a reação clicada
  const handleReactionClick = (reaction: string) => {
    setSelectedReaction(reaction);

    // Aqui você pode adicionar a lógica para enviar a reação para o banco de dados
    // Por exemplo, usando fetch para uma API
    console.log('Reação selecionada:', reaction);

    // Exemplo de chamada à API (substitua a URL pela sua API real)
    // fetch('/api/react', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ reaction }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Resposta da API:', data))
    //   .catch(error => console.error('Erro ao enviar reação:', error));
  };

  return (
    <div className="reaction-bar">
      {emojis.map((emoji) => (
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

export default ReactionBar;