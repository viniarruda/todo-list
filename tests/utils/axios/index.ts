import axios, { AxiosInstance } from 'axios'

export const createApi = (baseUrl: string): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
