import { ThemeProvider } from "styled-components";
import Hero from "./features/Hero";
import { theme } from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import Projects from "./features/Projects";
import Footer from "./features/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
