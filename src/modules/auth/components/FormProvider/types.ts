export type SignInFormData = {
  email: string
  password: string
}

export type FormProviderProps = {
  children: React.ReactNode
  defaultValues: SignInFormData
}