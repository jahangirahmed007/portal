import axios from 'axios';
import setAuthToken from '../services/SetAuthToken';


export const loginUser = (user, history) => dispatch => {
    axios.post("http://localhost:4000/portal-fare/login", user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(getCurrentUser());
        })

}

export const getCurrentUser = () => dispatch => {
    axios.get("http://localhost:4000/portal-fare/user")
        .then(res => {
            dispatch({
                type: "SET_CURRENT_USER",
                payload: res.data
            })

        })
}

export const logOut = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch({
        type: "LOGOUT_USER"
    })
    history.push('/')

}
export const RegisterAgent = (data) => dispatch => {
    axios.post("http://localhost:4000/portal-fare/agent/register", data)
        .then(res => console.log(res.data))
    // .catch(err => {
    //     dispatch({
    //         type: "GET_ERRORS",
    //         payload: err.response.data
    //     })
    // })
}

export const RegisterUser = (data) => dispatch => {
    axios.post("http://localhost:4000/portal-fare/user/register", data)
        .then(res => console.log("Created succwssfully"))
    // .catch(err => {
    //     dispatch({
    //         type: "GET_ERRORS",
    //         payload: err.response.data
    //     })
    // })
}