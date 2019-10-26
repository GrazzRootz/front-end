import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const GardenAPI = () => {
  const [showGardens, setShowGardens] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [gardens, setGardens] = useState("");
  const [plants, setPlants] = useState("");
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

  return (
    <>
      <h1>Garden API</h1>
      <button onClick={getGardens}>Get gardens</button>
      {showGardens&& gardens && gardens.gardens.map(garden => 
      <>
        <p>{garden.garden_name}</p>
        <button onClick={() => getPlantsInGarden(garden.garden_id)}>Show plants in this garden</button>
        </>
      )}
      {showPlants && plants && plants.plants.map(plant => <p>{plant.plant_name}: {plant.quantity}</p>)}
    </>
  );
};

export default GardenAPI;