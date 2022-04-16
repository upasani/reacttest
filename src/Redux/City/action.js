
export const CITY_SUCCESS= 'CITY_SUCCESS';
export const CITY_ERROR = 'CITY_ERROR';


export const cityAdded = (payload) => {
    return {
        type: CITY_SUCCESS,
        payload
    }
}
export const cityError = () => {
    return {
        type: CITY_ERROR
    }
}
export const cityInfo = (payload) => (dispatch) => {
    
    fetch(`http://localhost:8080/city`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "Application/json"
        }
    }).then((res) => res.json())
        .then((res) => dispatch(cityAdded(res)))
        .catch((err) => dispatch(cityError(err)))
}