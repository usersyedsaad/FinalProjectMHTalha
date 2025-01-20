import styles from '../App/App.module.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home'
import About from '../About/About'
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
