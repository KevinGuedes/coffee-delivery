import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  display: flex;
  padding: 5.75rem 0;
  gap: 3.75rem;

  aside {
    h1 {
      font-size: 3rem;
      font-family: 'Baloo 2';
      line-height: 1.3;
    }

    p {
      font-size: 1.25rem;
      color: ${props => props.theme.base.subtitle};
      line-height: 1.3;
      margin-top: 1rem;
    }
  }

  img {
    flex-shrink: 10;

    max-height: 22.5rem;
    max-width: 29.75rem;
    width: 100%;
    height: 100%;
  }
`
