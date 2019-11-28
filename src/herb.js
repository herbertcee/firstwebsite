import React from 'react';
import './App.css';

function Herbert(props) {
  console.log(props)

  return (
    <div>
        <p>
          Whats up {props.name}
        </p>
    </div>
  );
}

export default Herbert;