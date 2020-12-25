import logo from './logo.svg';
import './App.css';
import TestText from './components/parts/TestText';
import TestStateCard from './components/mass/TestStateCard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestText test={'aaa'}></TestText>
        <TestText></TestText>
        <TestStateCard initialNumber={100}></TestStateCard>
        <TestStateCard></TestStateCard>
      </header>
    </div>
  );
}

export default App;



