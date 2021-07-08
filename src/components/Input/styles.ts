import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.lightBlack};
  margin-bottom: 0.5rem;
`

interface InputProps {
  error: boolean
}
export const Input = styled.input<InputProps>`
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  ${props =>
    props.error
      ? css`
          border: 2px solid ${props.theme.colors.red};
        `
      : css`
          border: 1px solid ${props.theme.colors.gray};
        `}
  color: ${props => props.theme.colors.lightBlack};
  padding: 0 0.75rem;
  height: 3rem;
  width: 100%;
  outline: 0;

  &:focus {
    border: 2px solid
      ${props =>
        props.error ? props.theme.colors.red : props.theme.colors.purple};
  }
`
export const FormErrorMessage = styled.div`
  margin-top: 0.5rem;
  color: ${props => props.theme.colors.red};
  font-size: 0.8rem;
`
