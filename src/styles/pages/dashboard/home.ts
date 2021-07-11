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
`

export const ReportsContainer = styled.div`
  margin-top: 2rem;
  background: #fff;
  padding: 3.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.5rem;
`

export const Hours = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 2rem;
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.5rem;

  @media (max-width: 700px) {
    margin: 1.5rem 0;
    max-width: 500px;
  }
  h1 {
    padding: 1rem 2rem;
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
