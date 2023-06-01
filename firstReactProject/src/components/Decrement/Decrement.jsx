import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { decrement } from "../../redux/counterSlice";
import { useState } from "react";

const Decrement = () => {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(decrement(number));
  };
  return (
    <div>
      <label>
        Set decrement value
        <Input
          type="text"
          placeholder="Decrement value"
          className="my-input"
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
        ></Input>
      </label>
      <Button className="button cancelButton" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default Decrement;
