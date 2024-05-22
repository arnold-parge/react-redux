import './App.css';
import { Counter } from './components/Counter';
import { CounterLoader } from './components/CounterLoader';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterLoader />
    </div>
  );
}

export default App;
