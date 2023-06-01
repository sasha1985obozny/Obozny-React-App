import { Title } from "./components/Title/Title";
import { useDispatch } from "react-redux";
import { increment } from "./redux/counterSlice";
import Increment from "./components/Increment/Increment";
import Decrement from "./components/Decrement/Decrement";
import Reset from "./components/Reset/Reset";
import Counter from "./components/Counter/Counter";
import './main.scss'



function App() {
  // const dispatch = useDispatch();
  // const handleIncrement = () => {
  //   dispatch(increment)
  // }
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
