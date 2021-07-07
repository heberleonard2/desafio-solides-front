import { InputHTMLAttributes } from 'react'

import { Label, Input as CustomInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <CustomInput name={name} id={name} {...rest} />
    </>
  )
}
