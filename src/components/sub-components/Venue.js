import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { MARK, FAV } from '../../Redux/Actions/actions';

const Venue = (props) => {
    const dispatch = useDispatch();
    const location = () => {
        //console.log(props.data.location.lat)
        dispatch({
            type: MARK,
            payload: { id: props.data.id, name: props.data.name, lat: props.data.location.lat, lng: props.data.location.lng }
        })
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick={() => { location() }} variant="primary">Go to Map</Button>
                    <Button variant="primary">Add to fav</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Venue
