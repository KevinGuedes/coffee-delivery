import styled from 'styled-components'

export const CoffeesListContainer = styled.section`
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${props => props.theme.base.subtitle};
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
    justify-content: center;
  }
`
