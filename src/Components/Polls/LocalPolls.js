import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'


const LocalPolls = () => {

  const polls = [
        {title: 'Palm Tree in Kens Garden?',
    askedBy: 'David Weaver',
    vote: 'YES'
    },
    {title: 'Tomatos in Bowden Road?',
    askedBy: 'Sam Marshall',
    vote: 'YES'
    },
        {title: 'Spare tulip buds, any takers?',
    askedBy: 'David Weaver',
    vote: 'YES'
    },
        {title: 'Does anybody have a spare trowel?',
    askedBy: 'Natassja Blore',
    vote: 'NO'
    },

  ]

    const choices = polls.map( key => {
      return <>
    <h3>{key.title}</h3>
    <p>Current Consensus: {key.vote}</p>
    <p>Asked By: {key.askedBy}</p>
      <LinkContainer to="/garden/kensgarden">
          <Button>Go to this garden poll</Button>
        </LinkContainer>
      </>
    })

    return (
        <Container>
          <Col>
          <Row>            
            <h1>Questions your community is asking</h1>
          </Row>
          {choices}
          </Col>
        </Container>
      );
    }

export default LocalPolls;
