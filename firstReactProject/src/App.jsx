import { Button } from "./components/Button/Button";
import { Title } from "./components/Title/Title";
import { Input } from "./components/Input/Input";


function App() {
  return (
      <div>
        <Title name = 'My first component' className = 'title'></Title>
        <Input type = 'text' placeholder = 'My input' className = 'my-input'></Input>
        <Button name = 'OK' className = 'button okButton'></Button>
        <Button name = 'Cancel' className = 'button cancelButton'></Button>
        <Button name = 'Submit' className = 'button submitButton'></Button>
      </div>
  );
}

export default App;
