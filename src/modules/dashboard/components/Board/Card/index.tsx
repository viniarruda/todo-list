'use client'

import { useDrag } from 'react-dnd'

import { Badge, Flex, Typography } from '@/design-system/components'

import { Priority } from '@/services/entities/Todo'

import { badgeColor, CardProps } from './types'

import { Container, Header } from './styles'

export const Card = ({ todo }: CardProps) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: {
      type: 'CARD',
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const getBadgeVariantColor = (status: Priority) => {
    const badgeVariants: badgeColor = {
      [Priority.Low]: 'info',
      [Priority.Medium]: 'warning',
      [Priority.High]: 'danger',
    }

    return badgeVariants[status]
  }

  return (
    <Container
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      isDragging={isDragging}
    >
      <Header>
        {todo?.labels?.map(label => (
          <Badge key={label.id} color={getBadgeVariantColor(label.priority)}>
            {label.name}
          </Badge>
        ))}
      </Header>
      <Flex direction="column" minHeight="16" justify="center">
        <Typography fontSize="md" fontWeight="bold">
          {todo.title}
        </Typography>
      </Flex>
    </Container>
  )
}
