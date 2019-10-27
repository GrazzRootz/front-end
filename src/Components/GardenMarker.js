import React from 'react'
import App from '../App.css';

const GardenMarker = (props) => {
     return (
      <div className='garden-pin'>{props.garden.garden_name}</div>
    );
    
}

export default GardenMarker