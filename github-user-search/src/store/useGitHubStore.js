import { create } from 'zustand';
import { fetchUserData } from '../services/githubService';

const useGitHubStore = create((set) => ({
  username: '',
  userData: null,
  loading: false,
  error: null,

  setUsername: (username) => set({ username }),

  searchUser: async () => {
    set({ loading: true, error: null, userData: null });
    try {
      const data = await fetchUserData(useGitHubStore.getState().username);
      set({ userData: data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useGitHubStore;
