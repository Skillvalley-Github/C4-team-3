import { create } from 'zustand'
import Cookies from 'js-cookie';
import supabase from '..';

Cookies.set('name', 'value', { expires: 7 });

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
  handleFormSubmit: async (email, password, userType, navigate) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data.user !== null) {
      userType === 'worker' ? navigate("/worker/dashboard") : navigate("/admin/dashboard");
    } else {
      console.log(error);
      alert(error.message);
    }
  },
}));