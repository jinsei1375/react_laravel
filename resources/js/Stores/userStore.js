// userStore.js
import create from 'zustand';

export const useUserStore = create((set) => ({
    user: null,
    fetchUser: async () => {
        try {
            const response = await axios.get('/api/user');
            set({ user: response.data });
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    },
}));