import { Code2, ExternalLink, Github } from "lucide-react";
import { GlassContainer } from "../styles/GlassContainer";
import {
  Description,
  Grid,
  LinkGroup,
  ProjectTitle,
  SectionTitle,
  SectionWrapper,
  StyledLink,
  Tag,
  TagGroup,
} from "../styles/GridContainer";
import { Container } from "../styles/LayoutContainer";

function Projects() {
  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionTitle>
          Engineered <span>Systems</span>
        </SectionTitle>
        <Grid>
          <GlassContainer>
            <ProjectTitle>
              <Code2 size={24} color="#10b981" /> Minimalist Store
            </ProjectTitle>
            <Description>
              Advanced e-commerce engine focusing on price reconciliation and
              inventory management via centralized state.
            </Description>
            <TagGroup>
              <Tag>Redux</Tag>
              <Tag>React Router</Tag>
              <Tag>Figma-to-Code</Tag>
            </TagGroup>
            <LinkGroup>
              <StyledLink
                href="https://minimalist-ecommerce-v3.vercel.app/"
                target="_blank"
              >
                <ExternalLink size={16} /> Live
              </StyledLink>
              <StyledLink
                href="https://github.com/Jhay0617/minimalist-ecommerce-v3-theuglystorev3-"
                target="_blank"
              >
                <Github size={16} /> Code
              </StyledLink>
            </LinkGroup>
          </GlassContainer>

          <GlassContainer>
            <ProjectTitle>
              <Code2 size={24} color="#10b981" /> Nexus Finance
            </ProjectTitle>
            <Description>
              Nexus Finance v3 is a robust, full-stack financial management
              application built on a PostgreSQL core. It implements real-time,
              database-level security checks to enforce business rules
              atomically, ensuring that no account balance can fall below zero,
              regardless of the API input.
            </Description>
            <TagGroup>
              <Tag>TanStack Query</Tag>
              <Tag>Supabase</Tag>
              <Tag>Sonner</Tag>
              <Tag>PostgreSQL</Tag>
            </TagGroup>
            <LinkGroup>
              <StyledLink
                href="https://nexus-finance-v3.vercel.app/"
                target="_blank"
              >
                <ExternalLink size={16} /> Live
              </StyledLink>
              <StyledLink
                href="https://github.com/Jhay0617/nexus-finance-v3"
                target="_blank"
              >
                <Github size={16} /> Code
              </StyledLink>
            </LinkGroup>
          </GlassContainer>
          <GlassContainer>
            <ProjectTitle>
              <Code2 size={24} color="#10b981" /> Apex Crypto Dashboard
            </ProjectTitle>
            <Description>
              The Apex Dashboard is a real-time financial dashboard providing
              users with live price tracking, personalized watchlists, and
              dynamic asset analysis. Developed to modern 2026 standards, it
              prioritizes performance, accessibility, and intuitive UX design
              across all screen sizes.
            </Description>
            <TagGroup>
              <Tag>TanStack Query</Tag>
              <Tag>Redux</Tag>
              <Tag>Sonner</Tag>
            </TagGroup>
            <LinkGroup>
              <StyledLink
                href="https://apex-crypto-dashboard.vercel.app/"
                target="_blank"
              >
                <ExternalLink size={16} /> Live
              </StyledLink>
              <StyledLink
                href="https://github.com/Jhay0617/apex-crypto-dashboard"
                target="_blank"
              >
                <Github size={16} /> Code
              </StyledLink>
            </LinkGroup>
          </GlassContainer>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}

export default Projects;
