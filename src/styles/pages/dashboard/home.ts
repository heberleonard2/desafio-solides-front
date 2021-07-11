import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  padding: 0 2rem;
  display: flex;
  flex-direction: column;
`

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6rem;
  width: 100%;
  background: #fff;
  padding: 3.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.5rem;

  div {
    h1 {
      font-size: 2rem;
      @media (max-width: 400px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 200px;
      }
    }
    p {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 0.5rem;
      color: ${props => props.theme.colors.purple};
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;

    button {
      margin-top: 1.5rem;
    }
  }
`

export const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding-top: 1rem;
  border-radius: 0.5rem;

  @media (max-width: 700px) {
    margin-top: 1.5rem;
    max-width: 500px;
  }

  div {
    display: flex;
    align-items: center;

    padding: 1rem 2rem;

    & + div {
      border-top: 1px solid ${props => props.theme.colors.gray};
    }

    section {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;

      h3 {
        font-weight: 500;
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        margin-left: 1px;
        color: #4a525d;
      }
    }
    button {
      margin-left: auto;
      border: 0;
      outline: 0;
      background: none;

      &:hover {
        svg {
          color: ${props => props.theme.colors.purple};
        }
      }
      svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.red};
      }
    }
  }
`

export const Entrance = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${props => props.theme.colors.green};
  border-radius: 50%;
  height: 38px;
  width: 38px;

  svg {
    color: ${props => props.theme.colors.green};
    font-size: 1rem;
  }
`
export const Exit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid ${props => props.theme.colors.red};
  border-radius: 50%;
  height: 38px;
  width: 38px;

  svg {
    color: ${props => props.theme.colors.red};
    font-size: 1rem;
  }
`

export const ButtonReport = styled.button`
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
  }
  &:hover {
    filter: brightness(0.9);
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0px 0px 4px 1px ${shade(0.1, '#6D72F0')};
  }
`

export const NoReports = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 100%;
    max-width: 130px;
    height: auto;
    margin-left: 1.5rem;
  }
  h1 {
    margin-top: 2rem;
    text-align: center;
    color: ${props => props.theme.colors.darkPurple};
  }
`

export const ModalForm = styled.form`
  h1 {
    margin-bottom: 2rem;
  }
  div {
    margin-bottom: 2rem;
  }
`
