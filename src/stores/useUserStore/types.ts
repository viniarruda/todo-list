export type User = {
  id: string
  name: string
  email: string
}

export type State = {
  saveNewUser: (user: User) => void
  reset: () => void
  user: User | null
}
