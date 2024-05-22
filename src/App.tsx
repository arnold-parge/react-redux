import './App.css';
import { Counter } from './components/Counter';
import { IncrementButton } from './components/Increment';
import { DecrementButton } from './components/Decrement';
import { FirstNameInput } from './components/FirstNameInput';
import { LastNameInput } from './components/LastNameInput';
import { CounterLoader } from './components/CounterLoader';

function App() {
  return (
    <div className="App">
      <Counter />
      <IncrementButton />
      <DecrementButton />
      <FirstNameInput />
      <LastNameInput />
      <CounterLoader />
    </div>
  );
}

export default App;
