import { create } from 'zustand'
import supabase from '..'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
export const useAuthStore = create(set => ({
  user: null,
  isAuthenticated: async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) {
      return false
    } else {
      set({ user: user })
      return true
    }
  },
  loginUser: async (email, password, userType, navigate) => {
    toast.loading('Verifying')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if (error) return toast.error(error.message)
    else {
      set({ user: data.user })
      toast.success('Login successful!')
      Cookies.set('name', 'value', { expires: 7 })
      if (userType === 'worker') navigate('/worker/dashboard')
      else if (userType === 'admin') navigate('/admin/dashboard')
      return data
    }
  },
  checkSession: async navigate => {
    const toastId = toast.loading('Checking Session')
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) {
      console.log('hello')
      navigate('/auth')
      return null
    } else {
      toast.dismiss(toastId)
      set({ user: user })
      navigate('/worker/dashboard')
      toast.success('Login successful!')
      // Cookies.set('name', 'value', { expires: 7 })
      // if (userType === 'worker') navigate('/worker/dashboard')
      // else if (userType === 'admin') navigate('/admin/dashboard')
      return user
    }
  }
}))
