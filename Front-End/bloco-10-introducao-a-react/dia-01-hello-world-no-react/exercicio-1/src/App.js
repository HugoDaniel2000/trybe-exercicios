import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const compromissos = ['Bartolomeu', 'Hugo', 'Breno', 'Airton'];

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
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          >

          Learn React
        </a>
          <ol> {compromissos.map((param) => Task(param))}</ol>
      </header>
    </div>
  );
}

export default App;
