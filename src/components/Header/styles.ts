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
      padding: 0.125rem;
      height: 2.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      > span {
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
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.375rem;
        width: 2.375rem;
        background-color: ${props => props.theme.brand['yellow-light']};
        position: relative;

        svg {
          color: ${props => props.theme.brand['yellow-dark']};
        }

        strong {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 0.75rem;
          color: ${props => props.theme.white};
          background-color: ${props => props.theme.brand['yellow-dark']};
          padding: 8px;

          height: 1.25rem;
          width: 1.25rem;
          border-radius: 50%;

          position: absolute;
          top: -8px;
          right: -8px;
        }
      }
    }
  }
`
