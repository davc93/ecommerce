import {create, StateCreator} from 'zustand';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

interface User {}

interface AuthState {
  user: User | undefined;
  status: AuthStatus;
  setUser:()=>void;
  logout:()=>void
}

const store: StateCreator<AuthState> = (set, get) => ({
  user: undefined,
  status: 'checking',
  setUser:()=>{},
  logout:()=>{
    set({
        user:undefined,
        status:'unauthenticated'
    })
  }
});

export const useAuthStore = create<AuthState>()(store);
