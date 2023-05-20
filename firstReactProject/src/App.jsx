import Counter from "./components/Counter/Counter";
import { Title } from "./components/Title/Title";


function App() {
  return (
      <div>
        <Title className = 'title'>Counter</Title>
        <Counter />
      </div>
  );
}

export default App;
