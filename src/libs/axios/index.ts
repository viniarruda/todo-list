import axios from 'axios'

import { apiUrl } from '@/services/constants'

export const axiosInstance = axios.create({
  baseURL: apiUrl,
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)
