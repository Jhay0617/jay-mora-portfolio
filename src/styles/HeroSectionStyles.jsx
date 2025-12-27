import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 5rem;
  }
`;
export const HeroWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.accentGlow};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  display: inline-block;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
