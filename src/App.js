import logo from './logo.svg';
import './App.css';

function App() {
  const handleInvokeFunctionClick = async () => {
    const response = await fetch('/api/test');
    const body = await response.json();

    console.log({body});
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleInvokeFunctionClick}>Invoke function</button>
      </header>
    </div>
  );
}

export default App;
