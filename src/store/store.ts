import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  role: string | null;
  setRole: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  role: null,
  setRole: (token: string) => {
    const decodedToken = jwtDecode<{ role: string }>(token);
    set({ role: decodedToken.role });
  },
}));
