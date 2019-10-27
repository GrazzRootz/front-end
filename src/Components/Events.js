import React, { useState, useEffect } from "react";
import { useEvents, useDiaryEntries } from '../hooks/events';
import parseISO from 'date-fns/parseISO';
import compareDesc from 'date-fns/compareDesc';
import marked from 'marked';

const Event = ({ children: event }) => {
    const garden = event.garden ? `garden link TODO ${event.garden}` : ''
    return (
        <div className='event'>
            <h2 className='event-title'>{event.title}</h2>
            <div>
                <p>{event.date}</p>
                <p>{event.desc}</p>
                <>{garden === '' ? garden : <p>{garden}</p>}</>
            </div>
        </div>
    );
};

const Entry = ({ children: entry }) => {
    const garden = entry.garden ? `garden link TODO ${entry.garden}` : ''
    return (
        <div>
            <h2>{entry.date}: {entry.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: marked(entry.body) }} />
        </div>
    );
}

export const EventsAndEntries = () => {
    const { loading, error: eventsError, events } = useEvents();
    const { error: diaryError, entries } = useDiaryEntries();
    const [ unified, setUnified ] = useState([]);

    useEffect(() => {
        setUnified(events.concat(entries).sort((a, b) => {
            return compareDesc(
                parseISO(a.date),
                parseISO(b.date));
        }));
    }, [events, entries, loading]);

    return loading 
        ? <>Loading...</>
        : eventsError
        ? <p>Error! {eventsError.message}</p>
        : diaryError
        ? <p>Error! {diaryError.message}</p>
        : unified.length > 0
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
