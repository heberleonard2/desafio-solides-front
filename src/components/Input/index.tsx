import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import { FieldError } from 'react-hook-form'
import {
  Container,
  Label,
  Input as CustomInput,
  FormErrorMessage
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <Container>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <CustomInput name={name} id={name} ref={ref} error={!!error} {...rest} />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
