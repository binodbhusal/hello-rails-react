import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from '../redux/actions';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting); // Correct the state path

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
