import axios from "axios";

const BASE_URL = "http://localhost:3333/api";

export const getEvents = async (queryParams) => {
    return await axios.get(`${BASE_URL}/events?${queryParams}`);
};

export const getEventById = async (eventId) => {
    return await axios.get(`${BASE_URL}/events/${eventId}`);
};

export const saveEvent = async (newEvent) => {
    return await axios.post(`${BASE_URL}/events`, newEvent);
};

export const editEvent = async (eventId, updatedEvent) => {
    return await axios.put(`${BASE_URL}/events/${eventId}`, updatedEvent);
};