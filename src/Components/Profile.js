import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Profile = () => {
  const auth0 = useAuth0();
  const { user, loading } = auth0;

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Fragment>
      <Row>
        <Col lg={3} sm={12}>
          <Image src={user.picture} alt="Profile" fluid/>
        </Col>
        <Col lg={8} sm={12}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;
