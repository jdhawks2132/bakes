import "./Search.css"

import { useLocation } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import CakeList from "../../components/CakeList";

const Search = () => {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/cakes?q=' + query

    const { error, isPending, data} = useFetch(url)

    return ( 
        <div className="search">
            <h2 className="page-title">Search Results:</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && 
            data.map(cake => (
            <CakeList 
            key={cake.id}
            cake={cake}
            />
            ))}
        </div>
     );
}
 
export default Search;