import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import useGeolocation from './hooks/useGeolocation';
import Spinner from './components/Spinner';
import Background from './components/Background';

const App = () => {
  const {
    latitude,
    longitude,
    season,
    errorMsg
  } = useGeolocation();

  const waitingUserResponse = !latitude && !errorMsg;
  const color = waitingUserResponse ?
    'dark' :
    errorMsg ? 
      'primary' :
      season == 'winter' ?
        'info' :
        'warning';

  return (
    <Background color={color}>
      {!waitingUserResponse &&
        <div>Season: {season}</div>
      }
      {waitingUserResponse &&
        <Spinner label='Please accept requests' />
      }        
    </Background>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
