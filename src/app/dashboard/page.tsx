import { BaseLayout } from '@/layouts/BaseLayout'

import { Home } from '@/modules/dashboard/screens/Home'

export default function Dashboard() {
  return (
    <BaseLayout title="Todo Dashboard">
      <Home />
    </BaseLayout>
  )
}
