const db = require('../models/detecModels');

const detecController = {};

// console.log('db: ', db.query);

detecController.getEquipment = (req, res, next) => {
  // const sqlQuery = 'SELECT "serial_number", "removed_from_service", "operating_hq", "equipment_type", "kva_rating", "primary_voltage", "secondary_voltage", "manufacturer", "PCB_status", "created_by" FROM equipment;';
  const sqlQuery = 'SELECT * FROM equipment;';
  // write code here
  db.query(sqlQuery).then(sqlRes =>{
    // console.log('Query response: ', sqlRes.rows);
    res.locals.eqData = sqlRes.rows;
    return next();
  })
    .catch(e => {
      next({
        log: 'detecController.getEquipment error: ' + e,
        message: {err: 'Failed to get equipment, see server logs'}
      });
    });
};

module.exports = detecController;
