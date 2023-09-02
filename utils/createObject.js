const PolyanetService = require('../services/PolyanetService');
const SoloonService = require('../services/SoloonService');
const ComethService = require('../services/ComethService');

const createObject = async (object, params) => {
  const sharedParams = { 
    row: params.row, 
    column: params.column 
  };

  if (object === 'POLYANET') {
    return await PolyanetService.createPolyanet(sharedParams);
  }

  // Soloon object name format is [COLOR]_SOLOON
  if (object.includes('SOLOON')) {
    const [color] = object.split('_');

    return await SoloonService.createSoloon({
      ...sharedParams,
      color: color.toLowerCase(),
    });
  }

  // Cometh object name format is [DIRECTION]_SOLOON
  if (object.includes('COMETH')) {
    const [direction] = object.split('_');

    return await ComethService.createCometh({
      ...sharedParams,
      direction: direction.toLowerCase(),
    });
  }

  return false;
};

module.exports = {
  createObject,
};
