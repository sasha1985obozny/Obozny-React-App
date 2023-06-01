import { useSelector } from 'react-redux';
import './Counter.scss'

const Counter = () => {
    const {value} = useSelector(store => store.counter)
    return (
        <div className="counter">
            <h2>{value}</h2>
        </div>        
    )
  }    

export default Counter;