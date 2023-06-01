import { Title } from "./components/Title/Title";
import Increment from "./components/Increment/Increment";
import Decrement from "./components/Decrement/Decrement";
import Reset from "./components/Reset/Reset";
import Counter from "./components/Counter/Counter";
import './main.scss'

function App() {
  return (      
      <div className="center">
        <Title className = 'title'>СounterSlice з використанням Redux Toolkit</Title>
        <Counter />
        <Increment />
        <Decrement />
        <Reset />
      </div>
  );
}

export default App;
