
import './App.css'
import AboutMe from './components/about/AboutMe';
import Certifications from './components/certification/Certifications';
import ContactDetails from './components/contact/ContactDetails';
import WorkExperience from './components/experience/WorkExperience';
import ScrollToTop from './components/scrolltop/ScrollToTop';
import Skills from './components/skills/Skills';

function App() {
  

  return (
    <div className="App">
    <header>
      <h1>My Portfolio</h1>
      <nav className='nav-style'>
        <a href="#about">About</a>
        <a href="#work">Experience</a>
        <a href="#skill">Skill</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <section id="about">
    <AboutMe/>
      
    </section>
    <section id="work">
      <WorkExperience/>
    </section>
    <section id="skill">
    <Skills/>
    </section>
    <section id="certifications">
    <Certifications/>
    </section>
    <section id="contact">
      <ContactDetails/>
     </section>
    <footer>
      <p>&copy; 2024 My Portfolio</p>
    </footer>
    <ScrollToTop/>
  </div>
  );
}

export default App
