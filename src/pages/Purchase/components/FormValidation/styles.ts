import styled from 'styled-components'

export const FormValidationContainer = styled.div`
  ul {
    list-style-type: none;
  }

  li[role='alert'] {
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${props => props.theme.base.danger};
    margin-bottom: 0.5rem;
  }

  li:last-of-type {
    margin: 0;
  }
`
