import React, { useState, useEffect } from "react";
import { useEvents, useDiaryEntries } from '../hooks/events';
import { Link } from 'react-router-dom';
import parseISO from 'date-fns/parseISO';
import compareDesc from 'date-fns/compareDesc';
import marked from 'marked';

const events = [
    
    {"id":"26f6568c-3411-418a-96b3-7acfe1ed20a4","title":"Halloween Street Party!","user":"James!","date":"2019-10-31","desc":"Everyone bring some food","garden":"gardenUUID"},{"id":"5c1573b3-2ff1-4dc9-85b5-5d1e06c6e367","title":"Workshop: Make Moss Graffiti","user":"userUUID","date":"2019-09-10","desc":"Find out how to decorate your garden spaces with writing, drawings and more in a sustainable, non-damaging way!","garden":"gardenUUID"},{"id":"f8baf49b-e0ab-4977-9aa2-82b8bac03ae6",
        "title": "Harvest!", "date": "2019-10-02", "desc": "Time to get all of our veg up what we planted earlier in the year."}
]

const entries = [{
                        "id": "12345",
                        "title": "Gardening Pattern Language?",
                        "user": "sjm",
                        "date": "2019-10-10",
                        "body": "I've been reading a lot about [pattern languages](http://www.patternlanguage.com/), I was thinking we might want to start building one of these together as a community for our gardens?\n\nLast week at the community bonfire we ended up talking so well about how we wanted to manage our space, the different things we thought were important. This looks like an amazing way to get that stuff down so we can talk about it.\n\nLet me know what you think, I might just set up a wiki page anyway",
                        "garden": false
}]
const Event = ({ children: event }) => {
    return (
        <div className='event' style={{ paddingTop: 32 }}>
            <h2 className='event-title'>{event.title}</h2>
            <div>
                <p>{event.date}</p>
                <p>{event.desc}</p>
                <Link to="/garden/kensgarden">Ken's Garden!</Link>
            </div>
        </div>
    );
};

const Entry = ({ children: entry }) => {
    const garden = entry.garden ? `garden link TODO ${entry.garden}` : ''
    return (
        <div style={{ paddingTop: 32 }}>
            <h2>{entry.date}: {entry.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: marked(entry.body) }} />
        </div>
    );
}

export const EventsAndEntries = () => {
    const [ unified, setUnified ] = useState([]);

    useEffect(() => {
        setUnified(events.concat(entries).sort((a, b) => {
            return compareDesc(
                parseISO(a.date),
                parseISO(b.date));
        }));
    }, [events, entries]);

    return unified.length > 0
        ? unified.map(u => 
            u.body === undefined 
                ? <Event key={u.id}>{u}</Event>
                : <Entry key={u.id}>{u}</Entry>)
        : <p>No Events!</p>;
};


export const Events = () => {
    const { loading, error, events } = useEvents();

    return loading || events === undefined
        ? <>Loading...</> 
        : error 
        ? <div><p>Error! {error.message}</p></div> 
        : events.length > 0
        ? events.map(e => <Event key={e.id}>{e}</Event>)
        : <div><p>no events!</p></div>;
}
