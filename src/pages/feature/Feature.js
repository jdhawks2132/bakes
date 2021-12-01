import "./Feature.css"
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect } from 'react'



const Feature = () => {

    const { id } = useParams()
    const url = 'http://localhost:3000/cakes/' + id
    const { data } = useFetch(url)

    return ( 
        <div className="recipe">
            { data && <div className="card">
                <img 
                src={data.image}
                alt={data.flavor}
                />
                <h3>{data.flavor}</h3>
                <p>{data.size}</p>
                <p>$ {data.price}</p>
                <div>
                    {data.description}
                </div>
                <div>
        </div>
            </div>}
        </div>
     );
}
 
export default Feature;