import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.github.com/xedera"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trying To learn React
        </a>
      </header>
    </div>
  );
}

export default App;
