
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './CakeList.css'

const CakeList = ({ cake , deleteCake, updateCake}) => {
    const { id, flavor, price, size, liked, image} = cake

    const {color} = useTheme()

    function handleDelete() {
        // persist changes on server
        fetch(`http://localhost:3000/cakes/${id}`, {
            method: "DELETE"
        })
        // then use deleteCake to remove todo from state
        deleteCake(id)
    }

    return ( 
        <div className="recipe-list">
            <div className="card">
                <img 
                src={image} 
                alt={flavor}
                />
                <h3>{flavor}</h3>
                <p>{size}</p>
                <p>$ {price}</p>

                <button style={{background: color}} className='btn' onClick={()=>updateCake(id, !liked)}>{liked? '♥': '♡'}</button>
                <br />
                <button style={{background: color}} className='btn' onClick={handleDelete}>Remove Cake</button>
                <Link to={`/feature/${id}`}>More Info</Link>
            </div>
        </div>
     );
}
 
export default CakeList;
