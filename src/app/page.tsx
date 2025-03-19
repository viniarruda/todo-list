import { ToastProvider } from '@/contexts/Toast'
import { LoginScreen } from '@/modules/auth/screens/SignIn'

export default function Login() {
  return (
    <ToastProvider>
      <LoginScreen />
    </ToastProvider>
  )
}
