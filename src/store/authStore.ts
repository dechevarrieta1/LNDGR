import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  id: string;
  exp: number;
  iat: number;
}

interface State {
  user: User | null;
  isAuthenticated: boolean;
  accessToken: string;
}

interface Actions {
  setUser: (user: User) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
  setAccessToken: (accessToken: string) => void;
}

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      user: null,
      isAuthenticated: false,
      accessToken: "",
      setUser: (user) => set({ user, isAuthenticated: true }),
      setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          accessToken: "",
        }),
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    {
      name: "auth",
    }
  )
);
