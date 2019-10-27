import { useState, useEffect } from "react";
import { useAuth0, getAuthHeaders } from "../react-auth0-spa";
import axios from 'axios';

export function useEvents() {
    const [events, setEvents] = useState(undefined);
    const [error, setError] = useState(undefined);
    const { loading, getTokenSilently } = useAuth0();

    useEffect(() => {
        if (!loading) {
            getAuthHeaders(getTokenSilently)
                .then(headers => 
                    axios
                        .get('http://localhost:4000/event', { headers })
                        .then(data => data.data.events)
                        .then(setEvents)
                 )
                .catch(setError);
                
        } else {
            setEvents([]);
        }
    }, [loading]);

    return { loading, error, events };
}
