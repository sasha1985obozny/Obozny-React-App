import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/counterSlice";
import { useState } from "react";

const Reset = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset(number));
  };
  return (
    <div>
      <label>
        Set Reset value
        <Input
          type="text"
          placeholder="Reset value"
          className="my-input"
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
        ></Input>
      </label>
      <Button className="button submitButton" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default Reset;
