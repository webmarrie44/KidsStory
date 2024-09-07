
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Story from './Pages/Story';
import Jocks from './Pages/Jocks';
import Game from './Pages/Game';
import ExampleGame from './Pages/ExampleGame';
import QuizComp from './Pages/Quiz';
import QA from './Pages/QA';
import Homework from './Pages/Homework';
import Brands from './Pages/Brands';
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Story />
      <Game />
      <ExampleGame />
      <Jocks />
      <QA />
      <Homework />
      <QuizComp />
    </Router>
    

  );
}

export default App;
