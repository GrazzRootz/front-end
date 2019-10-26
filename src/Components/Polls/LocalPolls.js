import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import { Link } from "react-router-dom";


class LocalPolls extends React.Component {
    constructor(props){
        super(props);
        this.state ={
         polls: {
             title: "Loading..",
             choices: []
         }
        }
    }   

    componentDidMount = () => {
        var that = this;
        axios.get('http://127.0.0.1:8000/polls/' )
          .then(function (response) {
            that.setState({
              polls:  response.data
            })
          })
          .catch(function (error) {
            console.log("ERR:", error)
          });   
      }
    
    render() {

    const choices = Object.keys(this.state.polls).map( key => 
      <>
        <Row key={key}>
          <Link to={"/poll/"+this.state.polls[key].uuid}><h3>{this.state.polls[key].title}</h3></Link>
        </Row>
        <Row key={key+"3"}>
          <h5 className="text-muted">asked by {this.state.polls[key].user_uuid}</h5>
        </Row>
        </>
    )

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
}

export default LocalPolls;
