export type User = {
  name: string
  email: string
  password: string
}

export type State = {
  saveNewUser: (user: User) => void
  reset: () => void
  user: User | null
}