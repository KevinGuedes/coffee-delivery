import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    color: ${props => props.theme.brand['yellow-dark']};
    line-height: 1.3;
  }

  p {
    line-height: 1.3;
    color: ${props => props.theme.base.subtitle};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    margin-top: 1.75rem;

    > div {
      border: 1px solid transparent;
      border-radius: 6px 36px;
      width: 33rem;

      background-image: linear-gradient(white, white),
        linear-gradient(
          to right,
          ${props => props.theme.brand.yellow},
          ${props => props.theme.brand.purple}
        );
      background-origin: border-box;
      background-clip: content-box, border-box;

      > div {
        background-color: ${props => props.theme.base.background};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2.5rem;
        border-radius: 6px 36px;
      }
    }
  }
`
