import React, { useEffect, useState } from 'react';


function ApartmentList(){
    const[apartments, setApartments] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8001/api/apartments')
        .then(response=>response.json())
        .then(data=>setApartments(data))
        .catch(error => console.error('Error fetching apartments:', error));
    }, []);

    return(
        <div>
            <h1>List</h1>
            {apartments.map(apartments=>(
                <div key={apartments.id}>
                    <h2>{apartments.name}</h2>
                    <h3>{apartments.description}</h3>
                    <h4>{apartments.price}</h4>
                </div>
            ))}
        </div>
    );
}

export default ApartmentList;