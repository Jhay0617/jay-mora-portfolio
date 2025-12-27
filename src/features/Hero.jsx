import { CTAWrapper, PrimaryCTA, SecondaryCTA } from "../styles/CTAstyles";
import { GlassContainer } from "../styles/GlassContainer";
import {
  Badge,
  HeroContent,
  HeroWrapper,
  Subtitle,
  Title,
} from "../styles/HeroSectionStyles";
import { Container } from "../styles/LayoutContainer";

function Hero() {
  const currentYear = new Date().getFullYear();
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <Badge>Available for Hire — {currentYear}</Badge>
          <Title>
            Hi, I'm <span>Jay Mora</span>.<br />I build systems.
          </Title>

          <GlassContainer>
            <Subtitle>
              A Software Architect specializing in high-performance state
              management and pixel-perfect UI. From Redux logic to TanStack
              Query orchestration.
            </Subtitle>
            <CTAWrapper>
              <PrimaryCTA href="#projects">View Systems</PrimaryCTA>

              <SecondaryCTA href="mailto:jhay17mora@gmail.com">
                Start a Discussion
              </SecondaryCTA>
            </CTAWrapper>
          </GlassContainer>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
}

export default Hero;
