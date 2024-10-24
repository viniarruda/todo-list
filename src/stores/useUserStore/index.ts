import { create } from 'zustand'

import { State, User } from './types'

export const useUserStore = create<State>(set => {
  const saveNewUser = (user: User) => {
    set({ user })
  }

  const reset = () => {
    set({
      user: null,
    })
  }

  return {
    saveNewUser,
    reset,
    user: {
      name: 'Vinicius Arruda',
      email: 'vini@mail.com',
      password: '123456',
    }
  }
})