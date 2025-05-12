import React, { useEffect, useState } from 'react';


function ApartmentList(){
    const[apartments, setApartments] = useState([]);

    useEffect(()=>{
        // переменная окружения для url должна быть в корне 
        const url = import.meta.env.VITE_API_URL || 'http://localhost:8001/api/apartments';
        console.log(url)
        fetch(url)
        // для среды локальной разработки
        // fetch('http://localhost:8001/api/apartments') 
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