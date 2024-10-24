import { object, string } from 'zod'

export const schema = () => {
  return object({
    email: string({ required_error: "E-mail is required" }).email('Invalid email').min(5, 'Too short').max(255, 'Too long'),
    password: string({ required_error: "Password is required" }).min(6, 'Too short').max(255, 'Too long'),
  })
}