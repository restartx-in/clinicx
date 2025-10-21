import { useState } from 'react'
import api from '@/config/api'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (username, password) => {
    setLoading(true)
    setError(null)

    try {
      const response = await api.post('/auth/login', {
        username,
        password,
      })

      const data = response.data

      localStorage.setItem('access_token', data.accessToken)
      localStorage.setItem('refresh_token', data.refreshToken)

      localStorage.setItem('user_type', data.user.user_type)
      localStorage.setItem('user_id', data.user.id)

      setError(null)
      return { success: true, user: data.user }
    } catch (err) {
      let errorMessage = 'Login failed. Please check your credentials.'
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message
      } else if (!err.response) {
        errorMessage = 'Cannot connect to the server.'
      }

      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}

export default useLogin
