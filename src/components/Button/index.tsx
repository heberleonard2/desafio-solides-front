import { ButtonHTMLAttributes } from 'react'

import { Button as CustomButton } from './styles'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: ButtonProps) {
  return <CustomButton {...rest}>{children}</CustomButton>
}
