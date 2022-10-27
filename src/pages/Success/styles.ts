import styled from 'styled-components'
import { device } from '../../styles/devices'

export const SucessHeaderContainer = styled.header`
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

  @media ${device.mobile} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const SuccessContainer = styled.main`
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    margin-top: 1.75rem;

    > div {
      flex: 1;
      border: 1px solid transparent;
      border-radius: 6px 36px;
      min-width: 33rem;
      max-width: 40rem;

      background-origin: border-box;
      background-clip: content-box, border-box;
      background-image: linear-gradient(white, white),
        linear-gradient(
          to right,
          ${props => props.theme.brand.yellow},
          ${props => props.theme.brand.purple}
        );

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

  @media ${device.mobile} {
    section {
      margin-top: 3rem;
      flex-direction: column;
      gap: 3rem;
    }
  }
`
