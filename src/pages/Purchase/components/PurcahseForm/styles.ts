import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/defaultTheme'

export const PurchaseFormContainer = styled.section`
  flex: 1;

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

export const PaymentTypeContainer = styled(BaseDataContainer)``
