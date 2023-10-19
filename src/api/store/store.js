import { create } from 'zustand'
import supabase from '..'
import { toast } from 'sonner'
export const useAuthStore = create(set => ({
  user: null,
  setUser: user => set({ user: user }),
  loginUser: async (email, password, userType, navigate) => {
    const verTID = toast.loading('Verifying')
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) {
      toast.dismiss(verTID)
      return toast.error(error.message)
    } else {
      toast.dismiss(verTID)
      set({ user: data.user })
      toast.success('Login successful!', { duration: 500 })
      if (userType === 'worker') navigate('/worker/dashboard')
      else if (userType === 'admin') navigate('/admin/dashboard')
      return data
    }
  },
  checkSession: async navigate => {
    await supabase.auth.getSession().then(res => {
      if (res.data.session === null) {
        navigate('/auth')
        return null
      } else {
        set({ user: res.data.user })
        navigate('/worker/dashboard')
        toast.success('Login successful!', { duration: 500 })
        return res.data.user
      }
    })
  },
  logoutUser: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) return toast.error(error.message)
    else {
      set({ user: null })
      toast.success('Logout successful!', { duration: 750 })
      return null
    }
  }
}))
