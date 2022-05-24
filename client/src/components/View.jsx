import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ViewOne = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
        console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div key={pirate}>
            <p>Name: {pirate.name}</p>
            <label>Image:</label>
            <img src={pirate.img_url} height='200' alt='pirate_pic'/>
            <p>Treasure Count: {pirate.treasure_count}</p>
            <p>Phrase: {pirate.phrase}</p>
            <p>Position: {pirate.position}</p>
            <label>Peg Leg:
                {pirate.injuries ?
                <p>yes</p> :
                <p>no</p>}
            </label>
            <label>Eye Patch:
                {pirate.injuries_two ?
                <p>yes</p> :
                <p>no</p>}
            </label>
            <label>Hook Hand:
                {pirate.injuries_three ?
                <p>yes</p> :
                <p>no</p>}
            </label>
        </div>
    )
}
    
export default ViewOne;