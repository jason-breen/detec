const db = require('../models/detecModels');

const detecController = {};

// console.log('db: ', db.query);

detecController.getEquipment = (req, res, next) => {
  const sqlQuery = 'SELECT "id", "serial_number", "removed_from_service"::timestamp, "operating_hq", "equipment_type", "kva_rating", "primary_voltage", "secondary_voltage", "manufacturer", "PCB_status", "created_by" FROM equipment;';
  // const sqlQuery = 'SELECT * FROM equipment;';
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

detecController.addEquipment = (req, res, next) => {
  const sqlQuery = 
    'INSERT INTO equipment("serial_number", "removed_from_service", "operating_hq", "equipment_type", "kva_rating", "primary_voltage", "secondary_voltage", "manufacturer", "PCB_status", "created_by") VALUES (\'' + req.body.serial_number + '\', \'' + req.body.removed_from_service + '\', \'' + req.body.operating_hq + '\', \'' + req.body.equipment_type + '\', \'' + (req.body.kva_rating || 15) + '\', \'' + req.body.primary_voltage + '\', \'' + req.body.secondary_voltage + '\', \'' + req.body.manufacturer + '\', \'' + req.body.PCB_status + '\', \'' + req.body.created_by + '\') RETURNING *;';
  // const sqlQuery = 'SELECT * FROM equipment;';
  // write code here
  db.query(sqlQuery).then(sqlRes =>{
    console.log('Query response: ', sqlRes.rows);
    // res.locals.eqData = sqlRes.rows;
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
