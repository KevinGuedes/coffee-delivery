import styled from 'styled-components'
import { device } from '../../styles/devices'

export const DefaultLayoutContainer = styled.div`
  margin: 0 10rem 2.5rem 10rem;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    margin: 0 3rem 0.5rem 3rem;
  }
`
