import React, { useState , useEffect} from "react";
import { useAuth0, getAuthHeaders } from "../react-auth0-spa";
import Row from 'react-bootstrap/Row';
import GardenMap from './GardenMap';
import App from '../App.css';


const GardenAPI = () => {
  const [showGardens, setShowGardens] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);
  const [gardens, setGardens] = useState("");
  const [plants, setPlants] = useState("");
  const [equipment, setEquipment] = useState("");

  const { getTokenSilently } = useAuth0();
  const baseURL = 'http://localhost:3001/api';

  const getGardens = async () => {
    if (!showGardens) {
       try {
      const headers = await getAuthHeaders(getTokenSilently);
      const response = await fetch(`${baseURL}/gardens`, { headers });
      const responseData = await response.json();
      setShowGardens(true);
      console.log(responseData)
      setGardens(responseData);
    } catch (error) {
      console.error(error);
    }
    } else {
      setShowGardens(false);
      setShowPlants(false);
      setShowEquipment(false);
    }
   
  };

  const getPlantsInGarden = async (id) => {
    try {
      const token = await getTokenSilently();
      const response = await fetch(`${baseURL}/plants/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": '*',
        }
      });
      const responseData = await response.json();
      setShowPlants(true);
      setPlants(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  const getEquipmentInGarden = async (id) => {
    try {
      const token = await getTokenSilently();
      const response = await fetch(`${baseURL}/equipment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": '*',
        }
      });
      const responseData = await response.json();
      setShowEquipment(true);
      setEquipment(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    !showGardens && getGardens();
  })
  
if (showGardens) {
    return (

    <div className='garden-page-container'>
      <GardenMap gardens={gardens.gardens}/>
      {/* {showGardens&& gardens && gardens.gardens.map(garden => 
      <>
        <p>{garden.garden_name}</p>
        
        <button onClick={() => getPlantsInGarden(garden.garden_id)}>Show plants in this garden</button>
        <button onClick={() => getEquipmentInGarden(garden.garden_id)}>Show Equipment in this garden</button>
        </>
      )}
      {showPlants && plants && plants.plants.map(plant => <p>{plant.plant_name}: {plant.quantity}</p>)}
      {showEquipment && equipment && equipment.equipment.map(equipment => <p>{equipment.equipment_name}: {equipment.quantity}</p>)}
     */}
      <div className='garden-list'>
        {gardens && gardens.gardens.map(garden => {
          return (
            <>
              <h3>{garden.garden_name}</h3>
              <button>Go to this garden</button>
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
