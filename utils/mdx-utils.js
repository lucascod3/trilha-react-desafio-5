import { api } from '../services/api';

export const fetchPosts = async () => {
    const response = await api.get('/posts');

    if (response.data) {
        return response.data;
    }

    return [];
};

export const fetchPostById = async (id) => {
    try {
        const response = await api.get(`/post?id=eq.${id}`);
        
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar post:", err);
        return null;
    }
};
