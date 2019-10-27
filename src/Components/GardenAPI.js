import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Row from 'react-bootstrap/Row';

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
      const token = await getTokenSilently();
      const response = await fetch(`${baseURL}/gardens`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": '*',
        }
      });
      const responseData = await response.json();
      setShowGardens(true);
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

  return (
    <>
    <Row className="mr-auto ml-auto">

      <iframe 
        width="600" 
        height="450" 
        frameborder="0" 
        title="THIS IS A TEST "
        style={{border: "0"}} 
        src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ2_UmUkxNekgRqmv-BDgUvtk&key=AIzaSyAy6wYykvcPj_v9DitPe5GNx6AefsttM6U"} 
        allowfullscreen
        >
        
      </iframe>
    </Row>

      <button onClick={getGardens}>Get gardens</button>
      {showGardens&& gardens && gardens.gardens.map(garden => 
      <>
        <p>{garden.garden_name}</p>
        
        <button onClick={() => getPlantsInGarden(garden.garden_id)}>Show plants in this garden</button>
        <button onClick={() => getEquipmentInGarden(garden.garden_id)}>Show Equipment in this garden</button>
        </>
      )}
      {showPlants && plants && plants.plants.map(plant => <p>{plant.plant_name}: {plant.quantity}</p>)}
      {showEquipment && equipment && equipment.equipment.map(equipment => <p>{equipment.equipment_name}: {equipment.quantity}</p>)}
    </>
  );
};

export default GardenAPI;