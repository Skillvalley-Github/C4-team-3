import supabase from '../api'
import { redirect } from 'react-router-dom'
async function authLoader () {
  const res = await supabase.auth.getSession()
  if (res.data.session === null) {
    return redirect('/auth')
  }
  return null
}
async function workerLoader ({ request }) {
  const res = await supabase.auth.getSession()
  if (res.data.session === null) {
    return redirect('/auth')
  }
  const pathname = new URL(request.url).pathname
  if (pathname == '/worker/' || pathname === '/worker')
    return redirect('/worker/dashboard')
  return null
}
async function adminLoader ({ request }) {
  const res = await supabase.auth.getSession()
  if (res.data.session === null) {
    return redirect('/auth')
  }
  const pathname = new URL(request.url).pathname
  if (pathname == '/admin/' || pathname === '/admin')
    return redirect('/worker/dashboard')
  return null
}

export { authLoader, workerLoader, adminLoader }
