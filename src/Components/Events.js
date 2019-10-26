import React, { useState } from "react";
import { useAuth0, getAuthHeaders } from "../react-auth0-spa";
import axios from 'axios';

const Event = ({ children: event, key }) => {
    const garden = event.garden ? `garden link TODO ${event.garden}` : ''
    return (
        <div className='event' key={key}>
            <h2 className='event-title'>{event.title}</h2>
            <div>
                <p>{event.date}</p>
                <p>{event.desc}</p>
                <>{garden === '' ? garden : <p>{garden}</p>}</>
            </div>
        </div>
    );
};

export const Events = () => {
    const [events, setEvents] = useState(undefined);
    const [error, setError] = useState(undefined);
    const { loading, getTokenSilently } = useAuth0();

    const getEvents = () => getAuthHeaders(getTokenSilently)
        .then(headers => {
            console.log({ headers });
            return headers;
        })
        .then(headers => 
            axios
                .get('http://localhost:4000/event', { headers })
                .then(data => data.data.events)
                .then(setEvents)
         )
        .catch(setError);

    events === undefined 
        && getEvents() 
        && setEvents([]);

    return loading || events === undefined
        ? <>Loading...</> 
        : error 
        ? <div><p>Error! {error.message}</p></div> 
        : events.length > 0
        ? events.map(e => <Event key={e.uuid}>{e}</Event>)
        : <div><p>no events!</p></div>;
}
