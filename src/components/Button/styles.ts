import styled from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { shade } from 'polished'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.purple};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.white};
  border: 0;
  outline: 0;
  &:disabled {
    cursor: not-allowed;
    box-shadow: 0px 0px 4px 1px ${shade(0.1, '#6D72F0')};
    outline: 2px solid transparent;
    outline-offset: 2px;
    background: ${shade(0.3, '#6D72F0')};
  }
  &:hover {
    &:not([disabled]) {
      background: ${shade(0.1, '#6D72F0')};
    }
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0px 0px 4px 1px ${shade(0.1, '#6D72F0')};
    background: ${shade(0.3, '#6D72F0')};
  }
`
export const Loading = styled(AiOutlineLoading3Quarters)`
  margin-right: 0.5rem;
  animation: spin 0.75s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
