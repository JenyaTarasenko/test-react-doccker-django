import React, { useEffect, useState } from 'react';


function ListSearch(){
    const[apartments, setApartments] = useState([]);
    const[filter, setFilter]= useState({
        price_min: '',
        price_max: '',
        rooms: '',
    });


    const fetchApartments = () =>{

        const query = new URLSearchParams();
        Object.keys(filter).forEach((key)=>{
            if (filter[key] !==''){
                query.append(key, filter[key]);
            }
        });
        console.log(`http://localhost:8001/api/apartments/?${query.toString()}`)
        fetch(`http://localhost:8001/api/apartments/?${query.toString()}`)
        .then(res => res.json())
        .then(data => setApartments(data.results))
        .catch(err => console.error(err));
    };

    useEffect(()=>{
        fetchApartments();

    },[]);

    const handleChange = (e)=>{
        setFilter({
            ...filter,
            [e.target.name]:e.target.value
        });
    };

    const handleFilter =()=>{
        fetchApartments();
    };

    return(
        <div>
            <h1>Список квартир</h1>
            <div style={{ marginBottom: '1rem' }}>
                <input type="number" name="price_min" placeholder="Мин. цена" onChange={handleChange} />
                <input type="number" name="price_max" placeholder="Макс. цена" onChange={handleChange} />
                <input type="number" name="rooms" placeholder="Комнат" onChange={handleChange} />
                <button onClick={handleFilter}>Фильтровать</button>
            </div>

            <div>
                <h3>Список квартир</h3>
                {apartments.map(apartment=>(
                    <div key={apartment.id}>
                        <h2>{apartment.name}</h2>
                        <h3>{apartment.description}</h3>
                        <h4>{apartment.price}</h4>
                    </div>
                ))}
            </div>
        </div>  
    );
}
export default ListSearch;