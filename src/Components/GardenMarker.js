import React from 'react'
import App from '../App.css';

const GardenMarker = (props) => {
     return (
      <button className='garden-pin'>{props.garden.garden_name}</button>
    );
    
}

export default GardenMarker