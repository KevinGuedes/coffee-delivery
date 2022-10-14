import styled from 'styled-components'

export const SelectAmountContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.base.button};
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  span {
    width: 1rem;
    text-align: center;
    line-height: 1.6;
  }

  button {
    border: 0;
    background-color: transparent;
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;
    padding: 1px;
  }

  svg {
    color: ${props => props.theme.brand.purple};
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.brand['purple-dark']};
    }
  }
`
