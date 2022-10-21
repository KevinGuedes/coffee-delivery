import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  display: flex;
  padding: 5.75rem 0;
  justify-content: space-between;
  gap: 3.125rem;

  article {
    flex-shrink: 2;

    h1 {
      font-size: 3rem;
      font-family: 'Baloo 2';
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    > p {
      font-size: 1.25rem;
      color: ${props => props.theme.base.subtitle};
      line-height: 1.3;
    }

    > div {
      margin-top: 4.125rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 2.5rem;
    }
  }

  figure {
    flex-shrink: 1;
    max-height: 22.5rem;
    max-width: 29.75rem;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`
