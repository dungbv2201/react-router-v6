import create from 'zustand';

export const useUserStore = create(set => ({
	isAuthenticated: false,
	setIsAuthenticated: (isLogined) => set((state) => ({isAuthenticated: isLogined}))
}))
