import { ArrowUp, Linkedin, Mail } from "lucide-react";
import {
  ContactHeadline,
  Copyright,
  FooterContent,
  IconButton,
  ScrollToTop,
  SocialLinks,
  StyledFooter,
} from "../styles/FooterStyles";
import { Container } from "../styles/LayoutContainer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <ScrollToTop
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={20} />
          </ScrollToTop>

          <ContactHeadline>Ready to build the next system?</ContactHeadline>
          <p style={{ color: "#94a3b8" }}>
            Currently based in Botolan, Zambales, Philippines | Available for
            remote roles.
          </p>

          <SocialLinks>
            <IconButton href="mailto:jhay17mora@gmail.com" title="Email Me">
              <Mail size={24} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/jay-mora-architect/"
              target="_blank"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </IconButton>
            <IconButton
              href="https://github.com/Jhay0617"
              target="_blank"
              title="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </IconButton>
          </SocialLinks>

          <Copyright>
            © {currentYear} Jay Mora. Built with Vite, React, and Emerald Glass.
          </Copyright>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
