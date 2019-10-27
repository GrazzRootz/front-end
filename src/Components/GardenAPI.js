import React, { useState , useEffect} from "react";
import { useAuth0, getAuthHeaders } from "../react-auth0-spa";
import Row from 'react-bootstrap/Row';
import GardenMap from './GardenMap';
import App from '../App.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'


const GardenAPI = () => {

  const gardensData = [
     {
    garden_name: "Ken's Garden",
    soil_ph: '6',
    guerilla: false,
    latitude: 53.465,
    longitude: -2.216,
  },
  {
    garden_name: 'Briar Ridge',
    soil_ph: '6',
    guerilla: true,
    latitude: 53.463,
    longitude: -2.257,
  },
  {
    garden_name: 'Bowden Road',
    soil_ph: '6',
    guerilla: true,
    latitude: 53.507,
    longitude: -2.326,
  },
  {
    garden_name: 'Little Chapel',
    soil_ph: '6',
    guerilla: true,
    latitude: 53.491,
    longitude: -2.213,
  },
  {
    garden_name: "Julie's Allotment",
    soil_ph: '6',
    guerilla: false,
    latitude: 53.475,
    longitude: -2.276,
  },
  ]

if (true) {
    return (

    <div className='garden-page-container'>
      <GardenMap gardens={gardensData}/>
      <div className='garden-list'>
        {gardensData.map(garden => {
          return (
            <>
              <h3>{garden.garden_name}</h3>
                <LinkContainer to="/garden/kensgarden">
                  <Button>Go to this garden</Button>
                </LinkContainer>
            </>
          )
        })}
    </div>
    </div>
  );
} else {
  return (
  <h1>Loading...</h1>
  )
}

};

export default GardenAPI;
