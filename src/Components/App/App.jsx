import styles from '../App/App.module.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home/>
      <About/>
      <Services/>
      <Work />
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default App;
