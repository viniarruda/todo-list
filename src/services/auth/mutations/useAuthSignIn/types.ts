import { User } from '@/services/entities/User'

export type AuthSignInData = User

export type AuthSignInParams = {
  username: string
  password: string
}