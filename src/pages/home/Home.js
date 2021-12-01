
import { useEffect, useState} from 'react'

import "./Home.css"

import CakeList from '../../components/CakeList'

const Home = () => {

    const [cakes, setCakes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cakes")
          .then((r) => r.json())
          .then(data => setCakes(data));
    }, [])

    const deleteCake = (id) => {
        const updatedCakes = cakes.filter(cake => cake.id !== id)
        return setCakes(updatedCakes)
    }

    function updateCake(id, liked) {

        fetch(`http://localhost:3000/cakes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ liked })
            })
            .then(r => r.json())
            .then(updatedCake => {
            const updatedCakes = cakes.map(cake => {
            if (cake.id === id) return updatedCake;
            return cake;
            })
            setCakes(updatedCakes)
            console.log(cakes)
        })
    }   

    return ( 
        <div className="home">
            {
            cakes.map(cake => (
            <CakeList 
            key={cake.id}
            cake={cake}
            deleteCake={deleteCake}
            updateCake={updateCake}
            />
            ))}
        </div>
     );
}
 
export default Home;