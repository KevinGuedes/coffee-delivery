import { ReactNode } from 'react'
import {
  CircleColors,
  InformationIconContainer,
  InformationRootContainer,
  InformationTextContainer
} from './styles'

interface InformationProps {
  children: ReactNode
}

interface InformationRootProps extends InformationProps {}

function InformationRoot({ children }: InformationRootProps): JSX.Element {
  return <InformationRootContainer>{children}</InformationRootContainer>
}

interface InformationIconProps extends InformationProps {
  circleColor: CircleColors
}

function InformationIcon({
  children,
  circleColor
}: InformationIconProps): JSX.Element {
  return (
    <InformationIconContainer circleColor={circleColor}>
      {children}
    </InformationIconContainer>
  )
}

interface InformationTextProps extends InformationProps {}

function InformationText({ children }: InformationTextProps): JSX.Element {
  return <InformationTextContainer>{children}</InformationTextContainer>
}

export const Information = {
  Root: InformationRoot,
  Icon: InformationIcon,
  Text: InformationText
}
