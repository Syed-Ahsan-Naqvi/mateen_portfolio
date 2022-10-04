import './App.css';
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Skills from './components/Skills';
import Education from "./components/Education"
import Accomplishments from './components/Accomplishment';
import Experience from "./components/Experience"
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={15}
        color='121,121,121'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={4}
        trailingSpeed={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Main />
      <About />
      <Skills />
      <Education />
      <Accomplishments />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
