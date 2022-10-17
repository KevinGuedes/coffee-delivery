import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme.base.text};
    border: 1px solid ${props => props.theme.base.button};
    border-radius: 4px;
    background-color: ${props => props.theme.base.input};
    padding: 0.75rem;

    &::placeholder {
      color: ${props => props.theme.base.label};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme.brand['yellow-dark']};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  span {
    position: absolute;
    font-size: 0.75rem;
    color: ${props => props.theme.base.label};
    font-style: italic;
    line-height: 1.3;
    right: 0.75rem;
  }

  &:focus-within {
    span {
      display: none;
    }
  }
`
