import { Column } from '@/services/entities/Board'
import { Todo } from '@/services/entities/Todo'
import { UpdateBoardCardsOrder, UpdateBoardColumns } from './types'

export const updateBoardCardsOrder = ({
  todos,
  sourceIndex,
  destinationIndex,
}: UpdateBoardCardsOrder) => {
  const updatedTodos = [...todos]

  const [movedTodo] = updatedTodos.splice(sourceIndex, 1)

  updatedTodos.splice(destinationIndex, 0, movedTodo)

  return updatedTodos
}

// export const updateBoardColumns = ({
//   columnTitle,
//   reorderedTodos,
//   columns,
// }: UpdateBoardColumns): Column[] => {
//   return (columns || []).map(column =>
//     column.title === columnTitle
//       ? { ...column, todos: reorderedTodos }
//       : column,
//   )
// }

export const updateBoardColumns = ({
  columns,
  draggedListIndex,
  targetListIndex,
  sourceIndex,
  destinationIndex,
}: UpdateBoardColumns): Column[] => {
  const updatedColumns = [...(columns || [])]

  // If moving within the same column, just reorder the todos
  if (draggedListIndex === targetListIndex) {
    const column = updatedColumns[draggedListIndex]
    column.todos = updateBoardCardsOrder({
      todos: column.todos,
      sourceIndex,
      destinationIndex,
    })
    return updatedColumns
  }

  // Moving across different columns
  const sourceColumn = updatedColumns[draggedListIndex]
  const targetColumn = updatedColumns[targetListIndex]

  const [movedTodo] = sourceColumn.todos.splice(sourceIndex, 1)

  // Insert the todo into the target column at the specified destination index
  targetColumn.todos.splice(destinationIndex, 0, movedTodo)

  return updatedColumns
}
