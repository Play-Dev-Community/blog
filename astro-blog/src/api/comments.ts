import database from "core/firebase";
import { equalTo, get, orderByChild, push, query, ref, remove, set, update } from "firebase/database";

// Interface Comment
interface Comment {
  member_id: string;
  author: string;
  text: string;
  pubDatetime: string | Date;
  post: string;
}

// Função para criar um novo comentário
const createComment = async (data: Comment): Promise<void> => {
  try {
    const newCommentRef = push(ref(database, "comments"));
    await set(newCommentRef, data);
    console.log("New comment created:", newCommentRef.key);
  } catch (e) {
    console.error("[Error] Comment Create:", e);
    throw new Error("[Error] Comment Create");
  }
};

// Função para ler todos os comentários de um determinado post
const readComments = async (post: string): Promise<Comment[]> => {
  try {
    const CommentRef = ref(database, `comments`);
    const postQuery = query(CommentRef, orderByChild('post'), equalTo(post));
    const postSnapshot = await get(postQuery);

    const comments: Comment[] = [];

    postSnapshot.forEach(childSnapshot => {
      const comment = childSnapshot.val() as Comment;
      comments.push(comment);
    });

    return comments;
  } catch (e) {
    console.error("[Error] Comment Read:", e);
    throw new Error("[Error] Comment Read");
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