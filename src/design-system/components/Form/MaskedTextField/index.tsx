import React, { useEffect, useRef } from 'react'
import { IMaskMixin } from 'react-imask'
import { TextField } from '@/design-system/components/Form/TextField'

import { SizeType } from './types'

export const MaskedStyledInput = IMaskMixin(
  ({ inputRef, size, value, onChange, ...props }) => (
    <TextField
      {...props}
      size={size as unknown as SizeType}
      ref={inputRef as React.Ref<HTMLInputElement>}
    />
  ),
)
