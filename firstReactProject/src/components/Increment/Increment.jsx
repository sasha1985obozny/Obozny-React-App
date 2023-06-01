import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";
import { useState } from "react";

const Increment = () => {
  const [number, setNember] = useState(1);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(number));
  };
  return (
    <div>
      <label>
        Set increment value
        <Input
          type="text"
          placeholder="Increment value"
          className="my-input"
          value={number}
          onChange={(e) => setNember(e.target.value)}
        ></Input>
      </label>
      <Button className="button okButton" onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
};

export default Increment;
