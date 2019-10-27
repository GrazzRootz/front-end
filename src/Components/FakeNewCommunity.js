// this is the page you land on after making a new community
// it pretends it's loading and then is like take me to my community!
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export const FakeNewCommunity = () => {
    return (
        <Col>
            <Row><h2 style={{ textAlign: 'center', paddingTop: 16, paddingBottom: 8 }}>Welcome to Your New GrazzRootz Community!</h2></Row>
            <Row><p style={{ textAlign: 'center' }}>now when people try to use GrazzRootz in this area, they'll find there's already people working hard on making Manchester a better place</p></Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}><p style={{ textAlign: 'center' }}>your new home can be found at <pre><code style={{ background: 'lightgrey', padding: 4 }}>manchester-ancoats.grazzrootz.com</code></pre></p></Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Button as={Link} to='/garden-api' >Got It!</Button>
        </Row>
        </Col>
    );
};
