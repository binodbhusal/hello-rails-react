import { setGreeting } from "./reducers";

  export const fetchRandomGreeting = () => {
    return dispatch => {
      fetch('/api/greetings/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => dispatch(setGreeting(data.greeting)))
        .catch(error => {
          console.error('Error fetching greeting:', error);

        });
    };
  };
  