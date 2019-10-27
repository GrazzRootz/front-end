import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const CommunityCard = ({ img = 'angel-meadow.png', title = 'Angel Meadow', text = 'Our Meadow is a pretty nice place. We like seed bombs and other sweet stuff', ...rest }) => {
    return (
        <Col><Card {...rest}>
            <Card.Img variant='top' src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card></Col>
    );
}

const MakeNewCommunity = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container>
            <Row style={{ paddingTop: '16px' }}>
                <Col>
                    <h1 style={{ textAlign: 'center' }}>Welcome to Grazzrootz</h1>
                    <h2 style={{ textAlign: 'center' }}>We Reap What We Sow</h2>
                </Col>
            </Row>
            <Row style={{ paddingTop: '32px' }}>
                <Col>
                    <p style={{ textAlign: 'center' }}>Join other communities in taking control of your green space</p>
                </Col>
            </Row>
            <Row style={{ paddingTop: '8px' }}>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button  onClick={() => loginWithRedirect({})}>New Community</Button>
                </Col>
            </Row>
            <Row style={{ paddingTop: '32px' }}>
                    <CommunityCard style={{ width: 220 }} />
                    <CommunityCard style={{ width: 220 }}/>
            </Row>
            <Row style={{ paddingTop: '8px' }}>
                    <CommunityCard style={{ width: 220 }} />
                    <CommunityCard style={{ width: 220 }}/>
            </Row>
            <Row style={{ paddingTop: '16px' }}>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button  onClick={() => loginWithRedirect({})}>New Community</Button>
                </Col>
            </Row>
        </Container>
    );
}

export const NewCommunity = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <>
        {isAuthenticated 
            ? <Redirect to='/mycommunity' /> 
            : <MakeNewCommunity />}
        </>
    );
};
