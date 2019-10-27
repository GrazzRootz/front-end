import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "../../react-auth0-spa"
import { withRouter } from "react-router-dom";
import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/';

function NewComment(props) {
    const [message, setMessage] = useState(0);
    const auth0 = useAuth0();
    const { user } = auth0;
    const { getTokenSilently } = useAuth0();

    function updateText(event) {
        const target = event.target
        setMessage(target.value);
    }

    const submitPost = async () => {
        try {
          const token = await getTokenSilently();
          axios.post( `${baseURL}comments/${props.target_uuid}/`, 
            {
                'user_uuid': user.name,
                'target_uuid': props.target_uuid,
                'content': message
            }
          ).then( function(response){
                props.updateParent();
            }
          )
        } catch (error) {
          console.error(error);
        }
        
    }


    return (
        <>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="12" onChange={updateText}/>
            </Form.Group>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="outline-success" onClick={submitPost}>Post Comment</Button>
            </Row>
        </>
    )
}
export default withRouter(NewComment);
