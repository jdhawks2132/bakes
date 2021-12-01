import { useState, useEffect } from "react";
import { useFetch } from '../../hooks/useFetch'
import { useNavigate} from 'react-router-dom'

import "./Create.css"

const Create = () => {

    const [flavor, setFlavor] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [liked, setLiked] = useState(false)
    const navigate = useNavigate()

    const { postData, data, error} = useFetch('http://localhost:3000/cakes', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ flavor, size, price, description, image, liked})
    }
    //redirect after data response
    useEffect(() => {
        if (data) {
          setTimeout(() => navigate("/"), 250);
        }
      }, [data, navigate]);

    return ( 

        <div className="create">
            <h2 className="page-title">Add a New Cake</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Flavor:</span>
                <input 
                type="text" 
                id="flavor"
                onChange={(e) => setFlavor(e.target.value)}
                value={flavor}
                required
                />
            </label>
            <label>
                <span>Size:</span>
                <input 
                type="text" 
                id="size"
                onChange={(e) => setSize(e.target.value)}
                value={size}
                required
                />
            </label>
            <label>
                <span>Price:</span>
                <input 
                type="number" 
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
                />
            </label>
            <label>
                <span>Description:</span>
                <input 
                type="text" 
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                />
            </label>
            <label>
                <span>Image:</span>
                <input 
                type="url" 
                id="image"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                required
                />
            </label>

            <button className='btn'>submit</button>
        </form>
        </div>
     );
}
 
export default Create;
