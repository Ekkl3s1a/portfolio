// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import CoreCompetencies from "./components/CoreCompetencies";
import AnimatedSection from "./components/AnimatedSection";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col transition-all duration-500 ease-in-out shadow-inner">
      <Header />
      <NavBar />
      <ScrollProgressBar />
      <main className="flex-1 max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
        <AnimatedSection>
          <section id="profile">
            <Profile />
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section id="social">
            <Social />
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section id="certifications">
            <Certifications />
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section id="projects">
            <Projects />
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section id="competencies">
            <CoreCompetencies />
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section id="interests">
            <Interests />
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default App;
