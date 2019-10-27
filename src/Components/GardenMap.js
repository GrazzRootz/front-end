import React from 'react';
import  GardenMarker  from './GardenMarker';
import GoogleMapReact from 'google-map-react';
import {useState} from 'react'

const GardenMap = (props) => {

const center = ({
   center: {lat: 40.73, lng: -73.93}, 
   zoom: 12
})

const gardenMarkers = props.gardens && props.gardens.map((garden, index) => {
  return <GardenMarker 
             key={index} 
             garden={garden}
             lat={garden.latitude} 
             lng={garden.longitude} 
            />
})

 return (
       <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact 
          bootstrapURLKeys={{
           key: "AIzaSyAy6wYykvcPj_v9DitPe5GNx6AefsttM6U", 
            language: 'en'
          }}
          defaultCenter={{lat: 53.4808, lng: -2.2426}}
          center={{lat: 53.4808, lng: -2.2426}}
          defaultZoom={12}
        >{gardenMarkers}</GoogleMapReact>
      </div>
    );

}

export default GardenMap;