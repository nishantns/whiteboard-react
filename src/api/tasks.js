import axios from "axios";

const BASE_URL = "http://localhost:3333/api";

export const getTasks = async () => {
    return await axios.get(`${BASE_URL}/tasks`);
};