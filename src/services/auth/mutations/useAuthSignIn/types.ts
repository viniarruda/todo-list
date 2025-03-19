import { User } from '@/services/entities/User'

export type AuthSignInData = {
  accessToken: string
}

export type AuthSignInParams = {
  username: string
  password: string
}
