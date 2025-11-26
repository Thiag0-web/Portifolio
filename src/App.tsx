import { AboutSection } from "./components/about-section"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { PhraseSection } from "./components/phrase-section"
import { ProjectsSection } from "./components/projects-section"
import { SkillsSection } from "./components/skills-section"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portifolio-theme">
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <PhraseSection/>
      <AboutSection/>
      <Footer/>
    </ThemeProvider>

    
  )
}

export default App
