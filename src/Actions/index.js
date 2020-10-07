import axios from "axios";
import setAuthToken from "../services/SetAuthToken";
import url from "../constants/constants";
export const loginUser = (user, history) => (dispatch) => {
  axios
    .post(`${url}/portal-fare/login`, user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(getCurrentUser());
    })
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};

export const getCurrentUser = () => (dispatch) => {
  axios.get(`${url}/portal-fare/user`).then((res) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: res.data,
      // }).catch((err) => {
      //   // console.log(err.response.data);
      //   dispatch({
      //     type: "GET_ERRORS",
      //     payload: err,
      //   });
    });
  });
};

export const logOut = (history) => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: "LOGOUT_USER",
  });
  history.push("/");
};
export const RegisterAgent = (data) => (dispatch) => {
  axios
    .post(`${url}/portal-fare/agent/register`, data)
    .then((res) => console.log(res.data));
  // .catch(err => {
  //     dispatch({
  //         type: "GET_ERRORS",
  //         payload: err.response.data
  //     })
  // })
};

export const RegisterUser = (data) => (dispatch) => {
  axios
    .post(`${url}/portal-fare/user/register`, data)
    .then((res) => console.log("Created succwssfully"));
  // .catch(err => {
  //     dispatch({
  //         type: "GET_ERRORS",
  //         payload: err.response.data
  //     })
  // })
};
