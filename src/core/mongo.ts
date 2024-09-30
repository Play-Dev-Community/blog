export const prerender = false;

import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(import.meta.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect(): Promise<void> {
    await client.connect();
    console.log('Connected to MongoDB');
}

function getCollection() {
  return client.db('discord').collection('coins');
}

export { connect, getCollection, client };