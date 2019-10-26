import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

const GardenAPI = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();
  const baseURL = 'http://localhost:3001/api';

  const getGardens = async () => {
    try {
      const token = await getTokenSilently();
      const response = await fetch(`${baseURL}/gardens`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": '*',
        }
      });

      const responseData = await response.json();
      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Garden API</h1>
      <button onClick={getGardens}>Get gardens</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default GardenAPI;