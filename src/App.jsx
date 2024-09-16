
import './App.css'
import AboutMe from './components/about/AboutMe';
import Certifications from './components/certification/Certifications';
import ContactDetails from './components/contact/ContactDetails';
import WorkExperience from './components/experience/WorkExperience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './components/scrolltop/ScrollToTop';
import Skills from './components/skills/Skills';

function App() {
  

  return (
    <div className="App">
    <Header/>
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
    <Footer/>
    <ScrollToTop/>
  </div>
  );
}

export default App
