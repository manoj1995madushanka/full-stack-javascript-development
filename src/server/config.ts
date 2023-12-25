const env = process.env;

// to add custom post run app using PORT_3000 npm run dev:server
export const PORT: number = 8080;
export const HOST = env.host ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGO_URI = env.MONGO_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABSE_NAME ?? "local";

export default {
    PORT,
    HOST,
    SERVER_URL,
    MONGO_URI,
    DATABASE_NAME
}