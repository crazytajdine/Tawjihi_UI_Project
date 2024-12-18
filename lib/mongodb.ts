import * as mongoDB from "mongodb";

let client: mongoDB.MongoClient | null = null;
let db: mongoDB.Db | null = null;
const MONGODB_URI = process.env.MONGODB_URI || "";
const DB_NAME = process.env.DB_NAME || "";

export async function connectToDatabase() {
  client = new mongoDB.MongoClient(MONGODB_URI);
  await client.connect();

  db = client.db(DB_NAME);

  return db;
}
export async function disconnectDatabase() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
