import styled, { css } from 'styled-components'

export const SelectedCoffeesContainer = styled.section`
  flex-grow: 1;
  min-width: 28rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const SelectedCoffeesCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${props => props.theme.base.card};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    flex: 1;
    border: 0;
    padding: 0.75rem;
    color: ${props => props.theme.white};
    font-weight: bold;
    font-size: 0.875rem;
    border-radius: 6px;
    cursor: pointer;

    background-color: ${props => props.theme.brand.yellow};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.brand['yellow-dark']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme.brand['yellow-dark']};
    }
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface SummaryDataProps {
  isTotalPrice: boolean
}

export const SummaryData = styled.p<SummaryDataProps>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  line-height: 1.3;

  ${props => {
    if (props.isTotalPrice) {
      return css`
        color: ${props => props.theme.base.subtitle};
        font-size: 1.25rem;
      `
    } else {
      return css`
        color: ${props => props.theme.base.text};

        span:first-child {
          font-size: 0.875rem;
        }

        span:last-child {
          font-size: 1rem;
        }
      `
    }
  }}
`
