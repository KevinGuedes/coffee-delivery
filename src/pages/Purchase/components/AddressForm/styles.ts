import styled from 'styled-components'

export const AddressDataContainer = styled.div`
  background-color: ${props => props.theme.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormSectionHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  svg {
    color: ${props => props.theme.brand['yellow-dark']};
  }

  > div {
    span {
      display: block;
      color: ${props => props.theme.base.subtitle};
      line-height: 1.3;
    }

    p {
      display: block;
      font-size: 0.875rem;
      color: ${props => props.theme.base.text};
      line-height: 1.3;
    }
  }
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:nth-child(1) {
    width: 35%;
  }

  > div:nth-child(3),
  > div:nth-child(4) {
    display: flex;
    gap: 0.75rem;
  }

  > div:nth-child(3) {
    div:first-of-type {
      width: 35%;
    }

    div:last-of-type {
      flex: 1;
    }
  }

  > div:nth-child(4) {
    div:nth-child(1) {
      width: 35%;
    }

    div:nth-child(2) {
      flex: 1;
    }

    div:last-of-type {
      width: 11%;
    }
  }
`
