import React, { useState, useEffect} from 'react'

function DataFetching(){
    const [jugs,setJugs] = useState([])

    useEffect(() => {
        
        fetch.get('http://localhost:5000/jugadores')
        .then(res => {
            console.log(res)
            setJugs(res.data)
        })
        .catch(error => {console.log(error)})
    }, [])

    // return
    // <div>
    //     <ul>{jugs.map(post => (
    //         <li key= {jugs.Goles}>{jugs.id}</li>
    //         ))}</ul>
    //     </div>
} export default DataFetching