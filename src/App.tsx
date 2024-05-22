import './App.css';
import { Counter } from './components/Counter';
import { IncrementButton } from './components/Increment';
import { DecrementButton } from './components/Decrement';
import { CounterLoader } from './components/CounterLoader';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <IncrementButton />
      <DecrementButton />
      <UserForm />
      <CounterLoader />
    </div>
  );
}

export default App;
