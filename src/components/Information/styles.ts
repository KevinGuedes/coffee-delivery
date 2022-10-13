import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/defaultTheme'

export const InformationRootContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

const CIRCLE_COLORS = {
  purple: defaultTheme.brand.purple,
  yellow: defaultTheme.brand.yellow,
  'yellow-dark': defaultTheme.brand['yellow-dark'],
  gray: defaultTheme.base.text
} as const

export type CircleColors = keyof typeof CIRCLE_COLORS

interface InformationIconContainerProps {
  circleColor: CircleColors
}

export const InformationIconContainer = styled.div<InformationIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${props => CIRCLE_COLORS[props.circleColor]};

  svg {
    color: ${props => props.theme.white};
  }
`

export const InformationTextContainer = styled.p`
  line-height: 1.3;
  color: ${props => props.theme.base.text};
`
