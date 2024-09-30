import type { ReactionsFeedback } from "@components/FeedbackReactionBar/FeedbackReactionBar.enum";
import { getUserData } from "@utils/user.utils";
import database from "core/firebase";
import { equalTo, get, orderByChild, push, query, ref, set } from "firebase/database";

// Interface Feedback
export interface ReactionFeedbackDTO {
  member_id: string;
  feedback_id: string;
  reaction: keyof typeof ReactionsFeedback;
}

// Função para criar um novo comentário
const createFeedbackReaction = async (data: Omit<ReactionFeedbackDTO, 'member_id'>): Promise<void> => {
  const member_id = getUserData().id;

  const newData: ReactionFeedbackDTO = {
    ...data,
    member_id
  }

  try {
    const newFeedbackRef = push(ref(database, "reactions_feedback"));
    await set(newFeedbackRef, newData);
  } catch (e) {
    console.error("[Error] Reaction Create:", e);
    throw new Error("[Error] Reaction Create");
  }
};

// Função para ler todos os comentários de um determinado post
const readReactionFeedbacks = async (feedback_id: string): Promise<{
  reactions: { [key: string]: ReactionFeedbackDTO[] }
}> => {
  try {
    const ReactionsRef = ref(database, `reactions_feedback`);
    const postQuery = query(
      ReactionsRef,
      orderByChild('feedback_id'),
      equalTo(feedback_id)
    );
    const postSnapshot = await get(postQuery);

    const reactions: { [key: string]: ReactionFeedbackDTO[] } = {};

    postSnapshot.forEach(childSnapshot => {
      const r = childSnapshot.val() as ReactionFeedbackDTO;
      
      if (!reactions[r.reaction]) {
        reactions[r.reaction] = [];
      }
      reactions[r.reaction].push(r);
    });

    return { reactions };
  } catch (e) {
    console.error("[Error] Feedback Read:", e);
    throw new Error("[Error] Feedback Read");
  }
};

export { createFeedbackReaction, readReactionFeedbacks };