import React from "react";
import { useEvents } from '../hooks/events';

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
    const { loading, error, events } = useEvents();

    return loading || events === undefined
        ? <>Loading...</> 
        : error 
        ? <div><p>Error! {error.message}</p></div> 
        : events.length > 0
        ? events.map(e => <Event key={e.uuid}>{e}</Event>)
        : <div><p>no events!</p></div>;
}
