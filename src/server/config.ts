const env = process.env;

// to add custom post run app using PORT_3000 npm run dev:server
export const PORT = env.PORT ?? "8080";
export const HOST = env.host ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export default{
    PORT,
    HOST,
    SERVER_URL
}