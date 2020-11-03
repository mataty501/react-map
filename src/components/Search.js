import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react'
import axios from 'axios'
import Venue from './sub-components/Venue'

const Search = () => {
    const [input, setInput] = useState()
    const [search, setSearch] = useState()

    const handleSearch = async () => {

        const response = await axios.get('https://api.foursquare.com/v2/venues/search', {
            params: {
                client_id: 'YWGK5RFYGGWJ5TRI0RFRDMRZLZPQOR4NJDPPYANIUFDG2XDC',
                client_secret: 'GVMJR03JAIKQXMH2TRQSRNPCWLBMWC13MBWHQEVXGIBYFP3A',
                ll: '36.772249599999995,3.0343168',
                v: 20201026,
                query: input,

            }
        })
        setSearch(response.data.response.venues)
        console.log(response.data.response.venues[0])
    }




    return (
        <div>
            <InputGroup size="lg">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg" >Large</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={(e) => { setInput(e.target.value) }} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button onClick={() => { handleSearch() }} variant="primary">Primary</Button>{' '}
            <div className="result_search">
                {search ? search.map((elem) => <Venue key={elem.id} data={elem} />) : ''}
            </div>
        </div>
    )
}

export default Search   
