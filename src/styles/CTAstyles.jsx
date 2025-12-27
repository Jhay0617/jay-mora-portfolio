import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
`;

export const CTAWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const PrimaryCTA = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #060b13;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.display};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    filter: brightness(1.1);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
  }
`;

export const SecondaryCTA = styled.a`
  background: ${({ theme }) => theme.colors.glass};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;
