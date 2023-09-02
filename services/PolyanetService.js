const API = require('../api/API');

const createPolyanet = async ({ row, column }) => {
  const rq = {
    row,
    column,
  };

  const response = await API.post('polyanets', rq)

  return response.status === 200;
};

const deletePolyanet = async ({ row, column }) => {
  const rq = {
    row,
    column,
  };

  const response = await API.del('polyanets', rq)
  
  return response.status === 200;
};

module.exports = {
  createPolyanet,
  deletePolyanet,
};
