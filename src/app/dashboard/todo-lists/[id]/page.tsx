import { BaseLayout } from '@/layouts/BaseLayout'

import { TodoListScreen } from '@/modules/dashboard/screens/TodoList'

export default function DashboardTodoList({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  return (
    <BaseLayout title="Todo Dashboard">
      <TodoListScreen id={id} />
    </BaseLayout>
  )
}
