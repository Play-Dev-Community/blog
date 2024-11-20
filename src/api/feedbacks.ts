import { Storage } from '@core/storage';
import { EStorage } from 'models/storage.model';

// Interface Feedback
export interface Feedback {
  id?: string;
  user_id: string;
  author: string;
  title: string;
  text: string;
  datetime: number;
  support_link?: string;
  reactions?: string[];
}

// Função para criar um novo comentário
const createFeedback = async (data: Feedback): Promise<{ message: string }|void> => {

  try {
    let res: Response = await fetch(
      `${import.meta.env.PUBLIC_PLAYDEV_API}/feedbacks`, {
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
    console.error("[Error] Feedback Create:", e);
    throw new Error("[Error] Feedback Create");
  }

};

// Função para ler todos os comentários de um determinado post
const readFeedbacks = async (member_id: string): Promise<Feedback[]> => {
  try {
    let res: Response = await fetch(
      `${import.meta.env.PUBLIC_PLAYDEV_API}/feedbacks/${member_id}`, {
      headers: {
        authorization: `Bearer ${Storage.getData(EStorage.TOKEN)}`
      }
    }
    );

    const response = await res.json();

    return response;
  } catch (e) {
    console.error("[Error] Feedback Read:", e);
    throw new Error("[Error] Feedback Read");
  }
};

export { createFeedback, readFeedbacks };