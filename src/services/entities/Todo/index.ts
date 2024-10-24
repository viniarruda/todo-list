type Label = {
  id: string
  name: string
  color: string
}

enum Status {
  Backlog = 'BACKLOG',
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export type Todo = {
  id: string
  createdAt: string
  title: string
  description?: string
  labels?: Label[]
  status: Status
}
