import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";
import axios from 'axios';


class PollForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     polls: {
         title: "Loading..",
         choices: []
     },
     choice_uuid: ""
    }
  }   

  handleCheckboxChange = event => {
    const target = event.target
    const name = target.value
    this.setState({
      choice_uuid: name,
    });
  }

  componentDidMount = () => {
      var that = this;
      axios.get('http://127.0.0.1:8000/polls/'+this.props.match.params.id )
        .then(function (response) {
          that.setState({
            polls: {
                title: response.data[0].title,
                choices: response.data[0].choices
            }
          })
        })
        .catch(function (error) {
          console.log("ERR:", error)
        });   
    }

  handleSubmit = event => {
    event.preventDefault();
    var that =this;
    //send message to back end which should updateit 
    axios.put('http://127.0.0.1:8000/choices/'+this.state.choice_uuid+"/")
      .then(function (response){
        that.props.history.push("/poll-view/"+that.props.match.params.id );
      })
  };

  render() {

    const choices = Object.keys(this.state.polls.choices).map( key => 
      <ToggleButton value={this.state.polls.choices[key].uuid} key={key} variant="success" onChange={this.handleCheckboxChange} block>
        {this.state.polls.choices[key].choice_text}
     </ToggleButton>
    )
    
    return (
      <Container>
        <Col>
        <Row>
         <h2>{this.state.polls.title}</h2>
        </Row>
        <Row>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1} vertical>
          {choices}
          </ToggleButtonGroup>
        </Row>
        <Row>
          <Button variant="outline-success" onClick={this.handleSubmit}>Submit</Button>
        </Row>
        </Col>
      </Container>
      )
    }
}

export default withRouter(PollForm);
