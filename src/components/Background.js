import React from 'react';

const Background = ({color='warning', children}) => {
  return (
    <div
      style={{height: '100vh'}}
      className={`container bg-${color} d-flex bg-gradient justify-content-center align-items-center`}
    >
      {children}
    </div>
  );
};

export default Background;
