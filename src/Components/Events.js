import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios';

export class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/event').then(data => {
            this.setState(old => ({ events: data.data.events }));
        });
    }

    render() {
        // const { loading }  = useAuth0();
        return this.state.events.length === 0 ?
            <Fragment>loading</Fragment> :
            <Fragment><li>{
                this.state.events.map(event => 
                    <ul key={event.uuid}>
                        {event.title}
                    </ul>)
            }</li></Fragment>;
    }
}
