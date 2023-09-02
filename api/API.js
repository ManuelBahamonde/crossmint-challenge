const { default: axios } = require("axios");

const methods = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
};

const API = axios.create({
  baseURL: 'https://challenge.crossmint.io/api',
});

const sendRequest = async (url, method, payload) => {
  const formattedPayload = {};

  if (payload) {
    if (method === methods.GET) {
      formattedPayload.params = payload;
    } else {
      formattedPayload.data = payload;
      formattedPayload.data.candidateId = process.env.CANDIDATE_ID;
    }
  }

  return API({
    url,
    method,
    ...formattedPayload,
  })
    .catch((error) => {
      console.log(`There was an error on the API call: ${error.message}`);
      throw error;
    });
};

const get = (url, payload) => {
  return sendRequest(url, methods.GET, payload);
};

const post = (url, body) => {
  return sendRequest(url, methods.POST, body);
};

const del = (url, body) => {
  return sendRequest(url, methods.DELETE, body);
};

module.exports = {
  get,
  post,
  del,
};