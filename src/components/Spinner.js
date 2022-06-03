import React from 'react';

const Spinner = ({label = 'Loading'}) => {
  return (
    <>
      <div
        role='status'
        className='spinner-border text-light'
      >
        <span className='visually-hidden'>
          {label}
        </span>
      </div>
      {label && <div style={{margin: '0 8px',display: 'block', color: 'white'}}>
        <strong>{label}</strong>
      </div>}
    </>
  );
};

export default Spinner;
