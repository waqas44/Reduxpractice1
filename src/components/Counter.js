import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter_1 = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
    // useDispatch({ type: 'decrement' });
  };
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
    // useDispatch({ type: 'increment' });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter_1}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
