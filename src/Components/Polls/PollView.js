import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import CommentSection from '../Comments/CommentSection';

class PollView extends React.Component {
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
    
    render() {

    const choices = Object.keys(this.state.polls.choices).map( key => 
        <Row key={key}>{this.state.polls.choices[key].choice_text}:{this.state.polls.choices[key].votes}</Row>
    )

    return (
        <Container>
          <Col>
          <Row>
           <h2>{this.state.polls.title}</h2>
          </Row>
            {choices}
          <Row>
             <CommentSection target_uuid={this.props.match.params.id} /> 
          </Row>
          </Col>
        </Container>
      );
    }
}

export default PollView;
