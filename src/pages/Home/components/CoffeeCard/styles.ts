import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.base.card};
  border-radius: 6px 36px;
  width: 16rem;
  height: 19.375rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    img {
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -20px;
    }

    div {
      display: flex;
      gap: 0.25rem;

      strong {
        color: ${props => props.theme.brand['yellow-dark']};
        background-color: ${props => props.theme.brand['yellow-light']};
        padding: 4px 8px;
        border-radius: 999px;
        font-size: 0.625rem;
        line-height: 1.3;
      }
    }
  }

  > strong {
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${props => props.theme.base.subtitle};
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme.base.label};
    text-align: center;
    width: 90%;
  }

  footer {
    margin-top: 2rem;
    display: flex;

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${props => props.theme.base.text};

      strong {
        margin-left: 0.25rem;
        font-size: 1.5rem;
        font-weight: 800;
        font-family: 'Baloo 2';
        line-height: 1.6;
        color: inherit;
      }
    }

    div {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme.base.button};
      gap: 4px;
      padding: 0.5rem;
      border-radius: 6px;
      margin: 0 0.5rem 0 1.25rem;

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
        padding: 4px;
      }

      svg {
        color: ${props => props.theme.brand.purple};
        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.brand['purple-dark']};
        }
      }
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.375rem;
      width: 2.375rem;
      border-radius: 4px;

      background-color: ${props => props.theme.brand['purple-dark']};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${props => props.theme.brand.purple};
      }

      svg {
        color: ${props => props.theme.white};
      }
    }
  }
`
