import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name = "J"/>
      <Greet name = 'K'/>
      <Welcome name = "Ekene" />
    </div>
  );
}

export default App