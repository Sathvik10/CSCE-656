import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import ProjectList from './components/Project';
import CommonTheme from './components/CommonTheme';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <ProjectList />
      <CommonTheme />
    </BrowserRouter>
  );
}

export default App;
