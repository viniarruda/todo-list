import { BaseLayout } from '@/layouts/BaseLayout'

import { TodoListScreen } from '@/modules/dashboard/screens/TodoList'

export default async function DashboardTodoList(
  props: {
    params: Promise<{ id: string }>
  }
) {
  const params = await props.params;
  const { id } = params

  return (
    <BaseLayout title="Todo Dashboard">
      <TodoListScreen id={id} />
    </BaseLayout>
  )
}
