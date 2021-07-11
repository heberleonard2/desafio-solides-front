import styled from 'styled-components'
import { SiClockify } from 'react-icons/si'
export const Container = styled.header`
  height: 15rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  background: ${props => props.theme.colors.purple};

  div {
    max-width: 1260px;
    height: 6rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    nav {
      margin-left: 5rem;
      height: 6rem;

      display: flex;

      @media (max-width: 550px) {
        margin: 0 2rem;
      }

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: ${props => props.theme.colors.white};

        transition: color 0.2s;

        & + a {
          margin-left: 2rem;
        }

        &:hover {
          color: ${props => props.theme.colors.darkPurple};
        }

        &.active {
          color: ${props => props.theme.colors.white};
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;

          position: absolute;
          bottom: 1px;
          left: 0;
          background: ${props => props.theme.colors.white};
        }
      }
    }

    > button {
      margin-left: auto;
    }
  }
`

export const Logo = styled(SiClockify)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.white};
`

export const Logout = styled.button`
  font-size: 1rem;
  color: rgb(255, 255, 255);
  background: #5d62da;
  border: 0px;
  padding: 0px 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s ease 0s;
  font-weight: 500;
  @media (max-width: 400px) {
    padding: 0px 1rem;
    span {
      display: none;
    }
  }
  svg {
    margin-right: 0.5rem;
    @media (max-width: 400px) {
      margin-right: 0;
    }
  }
  &:hover {
    filter: brightness(0.9);
  }
`
