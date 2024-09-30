// Comments.tsx
import React, { useState, useEffect } from 'react';

import type { DiscordUserData } from '@api/discord';
import { getUserData } from '@utils/user.utils';
import { createComment, readComments } from '@api/comments';

import './Comments.scss';

interface Comment {
  member_id: string;
  author: string;
  text: string;
  post: string;
  pubDatetime: string | Date;
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

  const fetchComments = () => {
      readComments(post).then(res => {
        setComments(res);
      }).catch(e => {
        console.error(e);
      });
  };

  const handleAddComment = async () => {
    if (newComment.trim() === '') return;

    createComment({
      member_id: memberID!,
      author: memberName!,
      text: newComment,
      post,
      pubDatetime: new Date()
    });

    fetchComments();
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
              <div key={`${comment.member_id}_${comment.pubDatetime}`}>
                <p>{comment.text}</p>
                <small className='opacity-50'>{comment.author} • {comment.pubDatetime.toString()}</small>
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