import styled from 'styled-components'
import { device } from '../../styles/devices'

export const PurchaseContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;

  @media ${device.mobile} {
    flex-direction: column;
  }
`
