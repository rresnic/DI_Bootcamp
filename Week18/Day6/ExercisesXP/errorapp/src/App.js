// import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter';
// import CounterError from './components/CounterError'; This was here for testing to compare code. I had some trouble where the EB didn't prevent the error from crashing the entire page
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback={<p>Test</p>}>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
