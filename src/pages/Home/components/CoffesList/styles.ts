import styled from 'styled-components'

export const CoffeesListContainer = styled.menu`
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${props => props.theme.base.subtitle};
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    gap: 2.5rem 2rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  }
`
