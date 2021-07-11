import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: -6rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const ReportContainer = styled.div`
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

export const Calendar = styled.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 500px;
  }

  .DayPicker {
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    position: sticky;
    top: 30px;
    border-radius: 0.5rem;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }
  .DayPicker-Caption {
    div {
      color: ${props => props.theme.colors.black};
    }
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    border-radius: 10px;
    color: #68696d;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#6D72F0')};
    color: #fff;
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }
  .DayPicker-Day--selected {
    background: ${props => props.theme.colors.purple}!important;
    border-radius: 10px;
    color: #fff !important;
  }
  .DayPicker-NavButton--prev {
    color: ${props => props.theme.colors.purple};
  }
  .DayPicker-Weekday {
    color: ${props => props.theme.colors.black};
  }
`
