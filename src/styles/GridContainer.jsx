import styled from "styled-components";
export const SectionWrapper = styled.section`
  padding: 8rem 0;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const Tag = styled.span`
  background: rgba(16, 185, 129, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding-top: 1.5rem;
  margin-top: auto;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
