const API = require('../api/API');

const createSoloon = async ({ row, column, color }) => {
  const rq = {
    row,
    column,
    color,
  };

  const response = await API.post('soloons', rq)

  return response.status === 200;
};

const deleteSoloon = async ({ row, column }) => {
  const rq = {
    row,
    column,
  };

  const response = await API.del('soloons', rq)
  
  return response.status === 200;
};

module.exports = {
  createSoloon,
  deleteSoloon,
};
