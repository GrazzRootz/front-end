import React, { Fragment, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios';

const Event = (event) => {
    return (
        <div className='event' key={event.uuid}>
            <h2 className='event-title'>{event.title}</h2>
            <div>
                <p>{event.date}</p>
                <p>{event.desc}</p>
                <p>garden link TODO: {event.garden}</p>
            </div>
        </div>
    );
};

export const Events = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(undefined);
    const { loading, user } = useAuth0();

    axios.get('http://localhost:4000/event')
        .then(data => data.data.events)
        .then(setEvents)
        .catch(setError);


    return loading 
        ? <>Loading...</> 
        : error 
        ? <div><p>Error! {error.message}</p></div> 
        : events.length > 0
        ? events.map(e => <Event>{e}</Event>)
        : <div><p>no events!</p></div>;
}
