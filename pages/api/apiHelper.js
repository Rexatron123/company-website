import { message } from "antd";
import axios from "axios";
// import { API_URL } from "../Configs/config";

// Indicates that the request body format is JSON
const defaultHeaders = {
  "Content-Type": "application/json",
};

// const API_URL = "http://localhost:5000/";
// const API_URL = "http://192.168.0.112:5000/";
// const API_URL = "http://uab.hopto.org:5000/";
// const API_URL = "http://192.168.66.47/api/";
// const API_URL = "https://optimal360.optimalconsulting.com.sg/api/";

// These two to be used when promise has failed and display error message
let isAPIFailed = true;
let errorCode = "";

// Function for fetching login details from browser storage (For POST)
// Note: authHeaders is a HTTP header used for authenticating user admin with a server
// Note: isRemember to get "remember" item from the localStorage
// Note: token to get "accessToken" from the session storage
const fetching = (url, method, body, customHeaders) => {
  let authHeaders = {};
  let isRemember = localStorage.getItem("remember");
  let token = sessionStorage.getItem("accessToken");
  // IF url is not headed to login page, forgot-password, and first-time page
  // and IF token is neither undefined or null
  // --> User is given the bearer token
  // This prevents user from simply accessing the page by changing the url
  if (
    !url.includes("login") &&
    !url.includes("forgot-password") &&
    !url.includes("first-time")
  ) {
    if (token !== undefined && token !== null) {
      authHeaders = {
        Authorization: "Bearer " + token,
      };
      // IF the above is not true, then proceed to the next IF
      // IF "isRemember" is true (either string or boolean)
      // And IF rememberToken is neither undefined or null
      // --> User is given bearer token with a set expiry
    } else if (isRemember === "true" || isRemember === true) {
      let date = new Date(); // Current date
      let rememberToken = localStorage.getItem("accessToken");
      if (rememberToken !== undefined && rememberToken !== null) {
        let token = JSON.parse(rememberToken); // Convert JSON data into string form in JS objects
        if (date.getTime() > token.expiry) {
          removeLocalToken();
          return;
        } else {
          sessionStorage.setItem("accessToken", token.value);
          authHeaders = {
            Authorization: "Bearer " + token.value,
          };
        }
      } else {
        redirectToLogin("Session Expired. Please login again");
      }
    } else {
      redirectToLogin("Session Expired. Please login again");
    }
  }

  // Note: Object.assign() copies all enumerable own properties to a target object
  const headers = Object.assign({}, defaultHeaders, authHeaders, customHeaders);

  // `method` is the request method to be used when making the request
  // `url` is the server URL that will be used for the request
  // `headers`is the custom header to be sent
  // `data` is the data to be sent as the request body
  let config = {
    method: method,
    url: API_URL + url,
    headers: headers,
    data: body,
  };

  // Promise.race() method is used in an iterable fulfills or rejects ( Which promise is fulfilled or reject faster )
  // In this case, promise will be rejected within 90 seconds.
  // After 90 seconds, user will be redirected to the home page.
  return Promise.race([
    fetchAPI(config),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isAPIFailed && errorCode >= 400) {
          redirectToHomePage(errorCode);
        }
        reject("timeout");
      }, 90000);
    }),
  ]);
};

// Function to remove access token + role + remember state from local storage
const removeLocalToken = () => {
  localStorage.removeItem("remember");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("role");
};

// A function with a displayed error message
// --> promptError() --> redirectToHomepage() || redirectoToLogin()
const promptError = (errorMessage) => {
  message.error({
    content: errorMessage,
    style: {
      fontSize: "20px",
    },
    duration: 8,
  });
};

// A function to redirect user to home page
const redirectToHomePage = (errorCode) => {
  promptError(
    "The server encountered a temporary error. Please try again in 30 seconds."
  );
  window.location.replace("/404/" + errorCode);
};

// A function to redirect user to either admin/client/rater login
// window.location.replace means replace a document with another one
const redirectToLogin = (errorMessage) => {
  promptError(errorMessage);
  let role = localStorage.getItem("role");
  if (role === "admin") {
    window.location.replace("/admin/login");
  } else if (role === "client") {
    window.location.replace("/client/login");
  } else {
    window.location.replace("/rater/login");
  }
  return;
};

//
const fetchAPI = (config) => {
  // The request was made but no response was received
  return new Promise((resolve, reject) => {
    axios(config)
      .then((res) => {
        isAPIFailed = false;
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// These HTTP request exist to be used on multiple files
// Eg. APIHelper.GET('URL').then().catch()
const GET = (uri, body, customHeaders) =>
  fetching(uri, "GET", body, customHeaders);
const POST = (uri, body, customHeaders) =>
  fetching(uri, "POST", body, customHeaders);
const PATCH = (uri, body, customHeaders) =>
  fetching(uri, "PATCH", body, customHeaders);
const PUT = (uri, body, customHeaders) =>
  fetching(uri, "PUT", body, customHeaders);
const DELETE = (uri, body, customHeaders) =>
  fetching(uri, "DELETE", body, customHeaders);

export default {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
};
