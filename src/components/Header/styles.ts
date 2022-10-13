import styled from 'styled-components'

export const HeaderContainer = styled.header`
  nav {
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;

    a {
      line-height: 0;
      border-radius: 4px;
    }

    img {
      box-sizing: initial;
      padding: 2px;
      height: 2.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        font-size: 0.875rem;
        color: ${props => props.theme.brand['purple-dark']};
        background-color: ${props => props.theme.brand['purple-light']};
        display: flex;
        align-items: center;
        line-height: 1.3;
        gap: 0.25rem;
        padding: 0.5rem;
        height: 2.375rem;
        border-radius: 4px;

        svg {
          border: 4px solid transparent;
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.375rem;
        width: 2.375rem;
        background-color: ${props => props.theme.brand['yellow-light']};

        svg {
          color: ${props => props.theme.brand['yellow-dark']};
        }
      }
    }
  }
`
