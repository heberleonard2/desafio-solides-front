import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.lightBlack};
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.lightBlack};
  margin-bottom: 1.5rem;
  padding: 0 0.75rem;
  height: 3rem;
  width: 100%;
  outline: 0;

  &:focus {
    border: 2px solid ${props => props.theme.colors.purple};
  }
`
