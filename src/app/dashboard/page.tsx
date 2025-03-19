import { ToastProvider } from '@/contexts/Toast'
import { BaseLayout } from '@/layouts/BaseLayout'

import { Home } from '@/modules/dashboard/screens/Home'

export default function Dashboard() {
  return (
    <ToastProvider>
      <BaseLayout title="Todo Dashboard">
        <Home />
      </BaseLayout>
    </ToastProvider>
  )
}
