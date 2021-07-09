import styled from 'styled-components'
import { SiClockify } from 'react-icons/si'
import { shade } from 'polished'

export const Container = styled.main`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  padding: 1.5rem;
  animation: fadeIn 0.5s ease;

  h2 {
    margin: 1.75rem 0;
    color: ${props => props.theme.colors.lightBlack};
    text-align: center;
  }
  & > div {
    width: 100%;
    background: ${props => props.theme.colors.white};
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    form {
      display: flex;
      flex-direction: column;

      button {
        margin-top: 0.5rem;
      }
    }
    p {
      margin-top: 2rem;
      text-align: center;
      color: ${props => props.theme.colors.lightBlack};

      a {
        color: ${props => props.theme.colors.purple};
        text-decoration: underline;

        &:hover {
          color: ${shade(0.2, '#6D72F0')};
        }
      }
    }
  }

  @keyframes fadeIn {
    0% {
      transform: translateY(0.5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Logo = styled(SiClockify)`
  font-size: 4rem;
  color: ${props => props.theme.colors.purple};
`
