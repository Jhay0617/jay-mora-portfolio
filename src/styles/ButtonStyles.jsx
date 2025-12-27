import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #000;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const SecondaryButton = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  backdrop-filter: blur(5px);
  &:hover {
    background: ${({ theme }) => theme.colors.glass};
  }
`;
