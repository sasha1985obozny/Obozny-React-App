import './Counter.scss';
import { Button } from '../Button/Button';
import { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(0);

    const handleDecrement = () => {
        setValue((prevState) => --prevState);
    }
    
    const handleIncrement = () => {
        setValue((prevState) => ++prevState);
    }

    return (
        <>
            <div className = 'counter'>{value}</div>
            <div className = 'center'>
                <Button className = 'button' onClick = {handleDecrement}>-</Button>
                <Button className = 'button' onClick = {handleIncrement}>+</Button>
            </div>            
        </>
    )
}

export default Counter;