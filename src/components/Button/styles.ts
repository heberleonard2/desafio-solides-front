import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.purple};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  border: 0;
  outline: 0;
  &:hover {
    background: ${shade(0.1, '#6D72F0')};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0px 0px 4px 1px ${shade(0.1, '#6D72F0')};
  }
`
