import { LangProvider } from "./i18n";
import { CursorGlow, DotNav, Grain, TopBar } from "./components/Chrome";
import Hero, { Stats } from "./components/Hero";
import Marquee from "./components/Marquee";
import Focus from "./components/Focus";
import Systems from "./components/Systems";
import Education from "./components/Education";
import Work from "./components/Work";
import Exploring from "./components/Exploring";
import TechMatrix from "./components/TechMatrix";
import { Footer, PullQuote, Vision } from "./components/Closing";

export default function App() {
  return (
    <LangProvider>
      <div className="relative min-h-screen bg-void text-ink">
        <Grain />
        <CursorGlow />
        <TopBar />
        <DotNav />

        <main className="relative">
          <Hero />
          <Marquee />
          <Stats />
          <Focus />
          <Systems />
          <Education />
          <Work />
          <Exploring />
          <TechMatrix />
          <PullQuote />
          <Vision />
          <Footer />
        </main>
      </div>
    </LangProvider>
  );
}
