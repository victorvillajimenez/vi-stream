import React, {useState, useEffect} from 'react';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter'
  } else {
    return latitude > 0 ? 'winter' : 'summer'
  }
};

const useGeolocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [season, setSeason] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setSeason(getSeason(latitude, new Date().getMonth()));
      },
      error => {
        setErrorMsg(error.message);
      }
    );
    return () => {};
  }, []);

  return {
    latitude,
    longitude,
    season,
    errorMsg
  };
}

export default useGeolocation;
