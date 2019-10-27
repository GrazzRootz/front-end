import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import NewComment from "./NewComment"

const baseURL = 'http://127.0.0.1:8000/';

class Comment extends React.Component {
    render = () => {
        return (
        <>
            <Row>
                {/* <Col lg={2}> */}
                     {/* <Image src={this.props.picture} alt="Profile" fluid/> */}
                {/* </Col> */}
                <Col lg={12}>
                    <Row>
                    <h4 className="text-muted">{this.props.username}</h4>
                    </Row>
                     {this.props.message}

                </Col>
            </Row>
        </>
        )
    }
}

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
         comments: []
        }
    }   

    getComments = () => {
        var that = this;
        axios.get( baseURL+'comments/'+this.props.target_uuid )
          .then(function (response) {
            that.setState({
              comments: response.data
            })
          })
          .catch(function (error) {
            console.log("ERR:", error)
          });   
    }

    componentDidMount = () => {
        this.getComments()
    }
    render = () => {
        const comments = Object.keys(this.state.comments).map( key => 
            <Comment 
                key={key}
                picture={""}
                username={this.state.comments[key].user_uuid}
                message={this.state.comments[key].content}
            />
        )

        return (
            <>
            <Container>
                <Row>
                    <h5>Comments</h5>
                </Row>
                {comments}
                <NewComment 
                    target_uuid={this.props.target_uuid}
                    updateParent={this.getComments}
                    />
            </Container>
            </>
        )
    }
}


export default CommentSection;
