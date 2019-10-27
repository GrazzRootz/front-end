import { useState, useEffect } from "react";
import { useAuth0, getAuthHeaders } from "../react-auth0-spa";
import axios from 'axios';

export function useDiaryEntries() {
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState(undefined);
    const { loading, getTokenSilently } = useAuth0();

    useEffect(() => {
        if (!loading) {
            getAuthHeaders(getTokenSilently)
                .then(headers =>
                    axios
                        .get('http://localhost:4000/diary', { headers })
                        .then(data => data.data.entries)
                        .then(setEntries))
                .catch(setError);
        }     
    }, [loading, getTokenSilently]);

    return { loading, error, entries };
}

export function useEvents() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(undefined);
    // TODO: memoize auth0?
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
                
        }
    }, [loading, getTokenSilently]);

    return { loading, error, events };
}
