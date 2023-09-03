import { useState, useEffect } from 'react'
export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            window.location.href = '/profile'
        }
    }, [])

  return (
    <div>Auth</div>
  )
}
