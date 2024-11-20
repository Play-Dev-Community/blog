import { database } from "@core/firebase";
import { ref, remove, update } from "firebase/database";
import { Storage } from '@core/storage';
import { EStorage } from "models/storage.model";

// Interface Comment
interface Comment {
  user_id: string;
  author: string;
  text: string;
  pub_datetime: string | Date;
  post: string;
}

// Função para criar um novo comentário
const createComment = async (data: Comment): Promise<void> => {

  try {
    let res: Response = await fetch(
      `${import.meta.env.PUBLIC_PLAYDEV_API}/comments/${data.post}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Storage.getData(EStorage.TOKEN)}`
      },
      body: JSON.stringify(data)
    });

    const response = await res.json();

    return response;
  } catch (e) {
    console.error("[Error] Comment Create:", e);
    throw new Error("[Error] Comment Create");
  }

};

// Função para ler todos os comentários de um determinado post
const readComments = async (post: string): Promise<Comment[]> => {
  try {
    let res: Response = await fetch(
      `${import.meta.env.PUBLIC_PLAYDEV_API}/comments/${post}`, {
      headers: {
        authorization: `Bearer ${Storage.getData(EStorage.TOKEN)}`
      }
    }
    );

    const response = await res.json();

    return response;
  } catch (e) {
    console.error("[Error] Comments Read:", e);
    throw new Error("[Error] Comments Read");
  }
};

// Função para atualizar um comentário
const updateComment = async (commentID: string, newComment: string): Promise<void> => {
  try {
    const CommentRef = ref(database, `comments/${commentID}`);
    await update(CommentRef, { comment: newComment });
    console.log('Comment updated successfully');
  } catch (e) {
    console.error("[Error] Comment Update:", e);
    throw new Error("[Error] Comment Update");
  }
};

// Função para deletar um comentário
const deleteComment = async (commentID: string): Promise<void> => {
  try {
    const CommentRef = ref(database, `comments/${commentID}`);
    await remove(CommentRef);
    console.log("Comment deleted:", commentID);
  } catch (e) {
    console.error("[Error] Comment Delete:", e);
    throw new Error("[Error] Comment Delete");
  }
};

export { createComment, readComments, updateComment, deleteComment };