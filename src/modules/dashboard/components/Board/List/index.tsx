import { MdAdd } from 'react-icons/md'

import { Button, Flex, Typography } from '@/design-system/components'

import { Card } from '@/modules/dashboard/components/Board/Card'

import { ListProps } from './types'

import { ButtonIcon, Container, Header } from './styles'

export const List = ({ column }: ListProps) => {
  return (
    <Container done={column.done}>
      <Header>
        <Typography fontSize="xl" color="textSecondary">
          {column.title}
        </Typography>
        <Flex height="42px" width="42px">
          {column.creatable && (
            <ButtonIcon>
              <MdAdd size="16px" color="#fff" />
            </ButtonIcon>
          )}
        </Flex>
      </Header>
      <ul>{column.todos?.map(todo => <Card key={todo.id} todo={todo} />)}</ul>
    </Container>
  )
}
