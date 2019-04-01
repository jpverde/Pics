import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1e9a232b771b6950f4825043d47a65f5cd3ca8e984fe72c314aa9c401e273901'
    }
});