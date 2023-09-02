const API = require('../api/API');

const createCometh = async ({ row, column, direction }) => {
  const rq = {
    row,
    column,
    direction,
  };

  const response = await API.post('comeths', rq)

  return response.status === 200;
};

const deleteCometh = async ({ row, column }) => {
  const rq = {
    row,
    column,
  };

  const response = await API.del('comeths', rq)
  
  return response.status === 200;
};

module.exports = {
  createCometh,
  deleteCometh,
};
