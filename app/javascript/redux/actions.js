import { setGreeting } from './reducers';

const fetchRandomGreeting = () => (dispatch) => {
  fetch('/api/greetings/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => dispatch(setGreeting(data.greeting)))
    .catch((error) => {
      throw new Error('Error fetching greeting:', error);
    });
};
export default fetchRandomGreeting;
