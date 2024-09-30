import database from '@core/firebase';
import { ref, set } from 'firebase/database';
import { client } from '@core/mongo';

export async function GET(memberID: string) {

  if (!memberID) {

    return new Response(
      JSON.stringify({ error: 'O ID do membro é obrigatório' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );

  }

  try {
    await client.connect();
    const collection = client.db('discord').collection('coins');

    const document = await collection.findOne({ memberID });

    if (document) {

      const coinsRef = ref(database, `devcoins/${memberID}`);

      await set(coinsRef, {
        amount: document.coins
      });

      return new Response(
        JSON.stringify({ message: `Document synced to Firebase`, amount: document.coins }), 
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ error: `Document with ID not found` }), 
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error: any) {
    console.error('Failed to sync document:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to sync document', details: error?.message }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {

    try {
      await client.close();
    } catch (closeError) {
      console.error('Failed to close MongoDB connection:', closeError);
    }

  }
}

export default GET;
