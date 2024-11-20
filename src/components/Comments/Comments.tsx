// Comments.tsx
import React, { useState, useEffect } from 'react';

import type { DiscordUserData } from '@api/discord';
import { getUserData } from '@utils/user.utils';
import { createComment, readComments } from '@api/comments';

import './Comments.scss';

interface Comment {
  author: string;
  text: string;
  post: string;
  pub_datetime: string | Date;
}

interface Props {
  post: string;
}

const Comments: React.FC<Props> = ({ post }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [memberID, setMemberID] = useState<string | null>(null);
  const [memberName, setMemberName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser: DiscordUserData = getUserData();

    fetchComments();

    if (!storedUser) return;

    setMemberID(storedUser.id);
    setMemberName(storedUser.global_name);
  }, []);

const formatDate = (date: string | Date) => {
  const dateObj = new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  // Menos de 30 segundos
  if (diffInSeconds < 30) {
    return 'Agora mesmo';
  }

  // Menos de 1 minuto
  if (diffInSeconds < 60) {
    return `${diffInSeconds} segundos atrás`;
  }

  // Menos de 1 hora
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'} atrás`;
  }

  // Menos de 1 dia
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'} atrás`;
  }

  // Menos de 7 dias
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'} atrás`;
  }

  // Mais de 7 dias - formato original
  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).replace(',', ' às');
};

  const fetchComments = async () => {
      setComments(await readComments(post));
  };

  const handleAddComment = async () => {
    if (newComment.trim() === '') return;

    await createComment({
      user_id: memberID!,
      author: memberName!,
      text: newComment,
      post,
      pub_datetime: new Date()
    });

    setNewComment('');

    await fetchComments();
  };

  return (
    <div className='comment-container'>
      <div className='create-comment'>
        {
          !memberID &&
          <div className="login-mask">
            Logue-se para comentar
          </div>
        }

        {
        memberID &&
        <>
          <textarea
            className='comment-textarea'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            disabled={!memberID}
          />

          <button className='comment-button' onClick={handleAddComment}>Comentar</button>
        </>
        }
      </div>
      <div className='comments'>
        <h1 className="text-3xl font-bold">Comentários</h1>
        { comments.length ?
          comments.map(comment => 
            (
              <div key={`${comment.author}_${comment.pub_datetime}`}>
                <p>{comment.text}</p>
                <small className='opacity-50'>{comment.author} • {formatDate(comment.pub_datetime)}</small>
              </div>
            )
          ) : (
            'Esta publicação ainda não recebeu comentários. Seja o primeiro!'
          )
        }
      </div>
    </div>
    
  );
};

export default Comments;