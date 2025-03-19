export const routes = {
  LOGIN: '/',
  REGISTER: '/register/',
  DASHBOARD: '/dashboard/',
  DASHBOARD_TODO_LISTS: (boardId: string) => `/dashboard/todo-lists/${boardId}`,
  NEW_TODO_LISTS: '/dashboard/todo-lists/new/',
}
