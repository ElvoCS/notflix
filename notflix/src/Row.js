import React, { useState, useEffect, fetchUrl } from 'react'
import axios from './axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        //if brackets are blank run once when row loads and don't run it again
        //make an async call because we're making a request from an outside source
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData()
    }, []);

    return (
        <div>
            <h2>{title}</h2>

            {/*container -> poster */}

        </div>
    )
}

export default Row