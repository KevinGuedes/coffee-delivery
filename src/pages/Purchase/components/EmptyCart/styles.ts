import styled from 'styled-components'

export const EmptyCartContainer = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Baloo 2';
    color: ${props => props.theme.brand['yellow-dark']};
    line-height: 1.3;
  }

  p {
    line-height: 1.3;
    color: ${props => props.theme.base.subtitle};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    text-decoration: none;
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
