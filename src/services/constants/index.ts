export const baseUrl = 'https://5eb454842b81f700163084b3.mockapi.io' // use this as environment variable
export const apiUrl = 'https://todo-list-api-njb4.onrender.com'

export const microservices = {
  signIn: apiUrl + '/auth/login',
  todoList: baseUrl + '/todoList',
  todo: (id: string) => baseUrl + `/todoList/${id}`,
}

export const routes = {
  signIn: '/login',
  todoList: '/todoList',
  todo: (id: string) => `/todoList/${id}`,
}
