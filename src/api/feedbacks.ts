import database from "core/firebase";
import { equalTo, get, orderByChild, push, query, ref, remove, set, update } from "firebase/database";

// Interface Feedback
interface Feedback {
  id?: string;
  member_id: string;
  author: string;
  title: string;
  text: string;
  datetime: number;
  support_link?: string;
}

// Função para criar um novo comentário
const createFeedback = async (data: Feedback): Promise<void> => {
  try {
    const newFeedbackRef = push(ref(database, "feedbacks"));
    await set(newFeedbackRef, data);
    console.log("New feedback created:", newFeedbackRef.key);
  } catch (e) {
    console.error("[Error] Feedback Create:", e);
    throw new Error("[Error] Feedback Create");
  }
};

// Função para ler todos os comentários de um determinado post
const readFeedbacks = async (member_id: string): Promise<Feedback[]> => {
  try {
    const FeedbackRef = ref(database, `feedbacks`);
    const postQuery = query(FeedbackRef, orderByChild('member_id'), equalTo(member_id));
    const postSnapshot = await get(postQuery);

    const feedbacks: Feedback[] = [];

    postSnapshot.forEach(childSnapshot => {
      const feedback = childSnapshot.val() as Feedback;
      feedback.id = childSnapshot.key;
      feedbacks.push(feedback);
    });

    feedbacks.sort((a, b) => b.datetime - a.datetime);

    return feedbacks;
  } catch (e) {
    console.error("[Error] Feedback Read:", e);
    throw new Error("[Error] Feedback Read");
  }
};

// Função para atualizar um comentário
const updateFeedback = async (FeedbackID: string, newFeedback: string): Promise<void> => {
  try {
    const FeedbackRef = ref(database, `feedbacks/${FeedbackID}`);
    await update(FeedbackRef, { Feedback: newFeedback });
    console.log('Feedback updated successfully');
  } catch (e) {
    console.error("[Error] Feedback Update:", e);
    throw new Error("[Error] Feedback Update");
  }
};

// Função para deletar um comentário
const deleteFeedback = async (FeedbackID: string): Promise<void> => {
  try {
    const FeedbackRef = ref(database, `feedbacks/${FeedbackID}`);
    await remove(FeedbackRef);
    console.log("Feedback deleted:", FeedbackID);
  } catch (e) {
    console.error("[Error] Feedback Delete:", e);
    throw new Error("[Error] Feedback Delete");
  }
};

export { createFeedback, readFeedbacks, updateFeedback, deleteFeedback };