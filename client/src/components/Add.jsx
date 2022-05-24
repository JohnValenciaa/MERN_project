import React, { useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate = useNavigate()
    const [name, setTitle] = useState("");
    const [img_url, setImg_Url] = useState("");
    const [treasure_count, setTreasure_count] = useState(null);
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [injuries, setInjuries] = useState(true);
    const [injuries_two, setInjuries_Two] = useState(true);
    const [injuries_three, setInjuries_Three] = useState(true);
    const [errors, setErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/add', {
            name,
            img_url,
            treasure_count,
            phrase,
            position,
            injuries,
            injuries_two,
            injuries_three
        })
        .then(res=>{
            console.log(res)
            navigate('/')
        })
            
            // .catch(err=>console.log(err))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }


    return (
        <form onSubmit={onSubmitHandler}>

            <h1>Add Pirate!</h1>
                <button style={{bgColor: 'blue'}}>
                        <Link to ='/'>Crew Board</Link>
                </button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Pirate Name:</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Image URL:</label><br/>
                    <input type="text" onChange={(e)=>setImg_Url(e.target.value)} value={img_url}/>
                </p>
                <p>
                    <label># of Treasure Chests:</label><br/>
                    <input type="number" onChange={(e)=>setTreasure_count(e.target.value)} value={treasure_count}/>
                </p>
                <p>
                    <label>Pirate Catch Phrase:</label><br/>
                    <input type="text" onChange={(e)=>setPhrase(e.target.value)} value={phrase}/>
                </p>
                <label>Crew Position:</label><br/>
                <select value={position} onChange={e => setPosition(e.target.value)}>
                    <option value='captain'>Captain</option>)
                    <option value='Quarter Master'>Quarter Master</option>)
                    <option value='Boatswain'>Boatswain</option>)
                    <option value='Powder Monkey'>Powder Monkey</option>)
                </select>
                <p>Injuries:</p>
                <p>
                    <label>Peg Leg</label><br/>
                    <input type="checkbox" checked={injuries} onChange={(e)=>setInjuries(e.target.checked)}/>
                </p>
                <p>
                    <label>Eye Patch</label><br/>
                    <input type="checkbox" checked={injuries_two} onChange={(e)=>setInjuries_Two(e.target.checked)}/>
                </p>
                <p>
                    <label>Hook Hand</label><br/>
                    <input type="checkbox" checked={injuries_three} onChange={(e)=>setInjuries_Three(e.target.checked)}/>
                </p>
                <input type="submit" value={"Add Pirate"}/>
        </form>
    )
}

