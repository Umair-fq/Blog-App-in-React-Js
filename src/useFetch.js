//we created custom hook for data
import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    //creating state for storing errors
    const [error, setError] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
            fetch(url)
            //returning the promise, in which we are returning response json object
            .then(res => {
                if(!res.ok){
                    //if any error occurs during fetch request
                    throw new Error("Error while fetching blog data from server");
                }
                return res.json();
            })
            //promise for returning the data object
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            //if any error occurs, then set the error
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        // }, 1000)
    }, [url])
    return {data, isPending, error}
}

export default useFetch;