import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 6rem 0 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.glassBorder};
  margin-top: 4rem;
  background: linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.02));
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ContactHeadline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;

export const IconButton = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  margin-top: 3rem;
  opacity: 0.6;
`;

export const ScrollToTop = styled.button`
  background: ${({ theme }) => theme.colors.glass};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentGlow};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
