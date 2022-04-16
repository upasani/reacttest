const CITY_LOADING = 'CITY_LOADING';
const CITY_ADDED = 'CITY_ADDED';
const CITY_ERROR = 'CITY_ERROR';

export const cityLoding = () => {
    return {
        type: CITY_LOADING
    }
}
export const cityAdded = (payload) => {
    return {
        type: CITY_ADDED,
        payload
    }
}
export const cityError = () => {
    return {
        type: CITY_ERROR
    }
}
export const cityInfo = (payload) => (dispatch) => {
    dispatch(cityLoding());
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