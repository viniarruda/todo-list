export type MeData = {
  id: string
  username: string
  createdAt: string
  updatedAt: string
  role: 'USER' | 'ADMIN'
  deletedAt: string | null
}
