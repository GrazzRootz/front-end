import React from 'react'
import App from '../App.css';

const GardenPage = (props) => {
    const { handle } = props.match.params
  
     return (
     <div>
     {console.log('PARAMS', handle)}
    </div>
    );
}

export default GardenPage