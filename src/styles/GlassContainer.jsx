import styled from "styled-components";

export const GlassContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.5rem;
  }

  &:hover {
    transform: translateY(-8px);
    border: 1px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 12px 40px 0 rgba(16, 185, 129, 0.15);
  }
`;
