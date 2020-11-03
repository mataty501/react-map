import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ArrowRight } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux'

function Map() {
    const [viewport, setViewport] = useState({
        width: 800,
        height: 800,
        latitude: 36.772249599999995,
        longitude: 3.0343168,
        zoom: 8
    });

    const marked_array = useSelector(state => state.marker.marked)
    console.log(marked_array)
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}

        >
            {marked_array && marked_array.map((elem) => (

                <Marker latitude={elem.lat} longitude={elem.lng} offsetLeft={-20} offsetTop={-10}>
                    <div className="marker" style={{ width: 50, color: 'white' }}><ArrowRight /></div>
                </Marker>
            ))
            }

        </ReactMapGL>

    );
}

export default Map
