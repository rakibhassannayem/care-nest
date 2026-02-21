const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const database = process.env.DB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  return client.db(database).collection(collection);
};
