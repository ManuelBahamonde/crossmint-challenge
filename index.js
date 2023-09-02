require('dotenv').config();

const MapService = require('./services/MapService');
const { createObject } = require('./utils/createObject');
const wait = require('./utils/wait');

const start = async () => {
  try {
    // Getting goal to build
    const goal = await MapService.getGoal();

    for (let rowI = 0; rowI < goal.length ; rowI++) {
      const row = goal[rowI];

      for (let colI = 0; colI < row.length; colI++) {
        const object = row[colI];

        if (object === 'SPACE') continue;
       
        // Waiting 1 second before creating the object in order to avoid "Too Many Requests" error response
        await wait(1000);

        // Creating the object
        const success = await createObject(object, { row: rowI, column: colI });
        console.log(`[${rowI}:${colI} - ${object}]\t Result: ${success ? 'SUCCESS' : 'ERROR'}`);

        if (!success) return;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

start();