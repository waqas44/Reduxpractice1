import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const counter_1 = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // useDispatch({ type: 'decrement' });
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // useDispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
    // useDispatch({ type: 'increment' });
  };
  const toggleCounterHandler = (action) => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter_1}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
