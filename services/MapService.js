const API = require('../api/API');

const getGoal = async () => {
  const response = await API.get(`map/${process.env.CANDIDATE_ID}/goal`);

  if (response.status !== 200) return null;
  
  return response.data.goal
};

module.exports = {
  getGoal,
};
