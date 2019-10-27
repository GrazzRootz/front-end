import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const MakeNewCommunity = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect({})}>Log In</button>;
}

export const NewCommunity = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <>
        {isAuthenticated 
            ? <Redirect to='profile' /> 
            : <MakeNewCommunity />}
        </>
    );
};
