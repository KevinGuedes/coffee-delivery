import styled from 'styled-components'

export const CoffeeItemContainer = styled.article`
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${props => props.theme.base.button};
  display: flex;
  justify-content: space-between;

  &:first-child {
    padding-top: 0;
  }

  strong {
    line-height: 1.3;
  }

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const ActionsContainer = styled.div`
  display: block;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${props => props.theme.base.subtitle};
    line-height: 1.3;
  }

  > div {
    display: flex;
    gap: 0.5rem;

    > button {
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;
      font-size: 0.75rem;
      line-height: 1.6;
      font-weight: 400;
      cursor: pointer;

      display: flex;
      gap: 0.5rem;
      align-items: center;

      color: ${props => props.theme.base.text};
      background-color: ${props => props.theme.base.button};
      transition: background-color 0.2s;
      transition: color 0.2s;

      svg {
        color: ${props => props.theme.brand.purple};
        transition: color 0.2s;
      }

      &:hover {
        color: ${props => props.theme.base.subtitle};
        background-color: ${props => props.theme.base.hover};

        svg {
          color: ${props => props.theme.brand['purple-dark']};
        }
      }
    }
  }
`
