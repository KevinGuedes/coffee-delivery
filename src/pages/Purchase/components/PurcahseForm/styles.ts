import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/defaultTheme'

export const PurchaseFormContainer = styled.section`
  flex: 1;
  max-width: 40rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

const ICON_COLORS = {
  purple: defaultTheme.brand.purple,
  'yellow-dark': defaultTheme.brand['yellow-dark']
} as const

export type IconColors = keyof typeof ICON_COLORS

interface FormSectionHeaderProps {
  iconColor: IconColors
}

export const FormSectionHeader = styled.header<FormSectionHeaderProps>`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  svg {
    color: ${props => ICON_COLORS[props.iconColor]};
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

const BaseDataContainer = styled.div`
  background-color: ${props => props.theme.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const MainDataContainer = styled(BaseDataContainer)``

export const PaymentTypeContainer = styled(BaseDataContainer)`
  div[role='group'] {
    display: flex;
    gap: 0.75rem;

    button[data-state='on'] {
      border: 1px solid ${props => props.theme.brand.purple};
      background-color: ${props => props.theme.brand['purple-light']};
    }

    button {
      flex: 1;
      padding: 1rem;
      border: 1px solid transparent;
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
