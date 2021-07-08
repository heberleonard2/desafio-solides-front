import { ButtonHTMLAttributes } from 'react'

import { Button as CustomButton, Loading } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return (
    <CustomButton {...rest} disabled={isLoading}>
      {isLoading && <Loading />}
      {children}
    </CustomButton>
  )
}
