import Navbar from '../src/Components/Navbar.jsx';
import Intro from '../src/Components/Intro.jsx';
import Experience from './Components/Experience.jsx';
import './style.scss'
import Certificates from './Components/Certificates.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/>
      <Certificates/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
