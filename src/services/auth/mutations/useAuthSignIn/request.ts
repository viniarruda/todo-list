import axios from 'axios'

import { AuthSignInData, AuthSignInParams } from './types'

export const authSignIn = async (
  microservice: string,
  params: AuthSignInParams
): Promise<AuthSignInData> => {
  
  const { data } = await axios.post<AuthSignInData>(
    microservice, params
  )

  return data
}