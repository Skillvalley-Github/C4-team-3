import { create } from 'zustand'
import supabase from '..'
import { toast } from 'sonner'

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
  handleFormSubmit: async (email, password, userType, navigate) => {
    toast.loading("Verifying");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) return toast.error(error.message);

    set({ user: data.user });
    toast.success("Login successful!");

    if (userType === 'worker') navigate("/worker/dashboard");
    else if (userType === 'admin') navigate("/admin/dashboard");
    else return null
  },
}));