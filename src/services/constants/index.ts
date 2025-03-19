export const baseUrl = 'https://5eb454842b81f700163084b3.mockapi.io' // use this as environment variable
export const apiUrl = 'https://todo-list-api-njb4.onrender.com'

export const microservices = {
  signIn: apiUrl + '/auth/login',
  boards: apiUrl + '/boards',
  board: (id: string) => apiUrl + `/boards/${id}`,
  tasks: apiUrl + '/tasks',
  task: (id: string) => apiUrl + `/tasks/${id}`,
  clients: apiUrl + '/clients',
  me: apiUrl + '/me',
}

export const routes = {
  signIn: '/login',
  todoList: '/todoList',
  board: (id: string) => `/boards/${id}`,
}
