'use client'

import { Container } from './styles'

import { useMemo } from 'react'
import { Typography } from '../Typography'
import { AvatarProps } from './types'

export const Avatar = ({ size, name }: AvatarProps) => {
  const letters = useMemo<string>(() => {
    const fullName = name.split(` `)

    if (fullName.length > 1) {
      const firstTwoLetters = `${(fullName.shift() || ``).charAt(0)}${(
        fullName.pop() || ``
      ).charAt(0)}`

      return firstTwoLetters
    }

    return name.charAt(0)
  }, [name])

  return (
    <Container size={size}>
      <Typography fontSize="2xl" color="black">
        {letters?.toUpperCase()}
      </Typography>
    </Container>
  )
}
