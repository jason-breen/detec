const db = require('../models/detecModels');

const detecController = {};

// console.log('db: ', db.query);

detecController.getEquipment = (req, res, next) => {
  const sqlQuery = 'SELECT "id", "serial_number", left(cast("removed_from_service" as text), 10) as "removed_from_service", "operating_hq", "equipment_type", "kva_rating", "primary_voltage", "secondary_voltage", "manufacturer", "PCB_status", "created_by" FROM equipment ORDER BY "id";';
  // const sqlQuery = 'SELECT * FROM equipment;';
  // write code here
  db.query(sqlQuery).then(sqlRes =>{
    console.log('Query response: ', sqlRes.rows);
    res.locals.eqData = sqlRes.rows;
    // res.locals.eqData.removed_from_service = sqlRes.rows.map(x => x.removed_from_service.slice(0,9));
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
    // console.log('Query response: ', sqlRes.rows);
    // res.locals.eqData = sqlRes.rows;
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

detecController.deleteEquipment = (req, res, next) => {
  const sqlQuery =  
    'DELETE FROM equipment WHERE "id"=\'' + req.params.eqId + '\';';
  // const sqlQuery = 'SELECT * FROM equipment;';
  // write code here
  db.query(sqlQuery).then(sqlRes =>{
    console.log('Query response: ', sqlRes.rows);
    // res.locals.eqData = sqlRes.rows;
    return next();
  })
    .catch(e => {
      next({
        log: 'detecController.deleteEquipment error: ' + e,
        message: {err: 'Failed to delete equipment, see server logs'}
      });
    });
};

detecController.updateEquipment = (req, res, next) => {
  const sqlQuery =  
    'UPDATE equipment SET "serial_number"=\''+ req.body.serial_number + '\', "removed_from_service"=\''+ req.body.removed_from_service + '\', "operating_hq"=\''+ req.body.operating_hq + '\', "equipment_type"=\''+ req.body.equipment_type + '\', "kva_rating"=\''+ req.body.kva_rating + '\', "primary_voltage"=\''+req.body.primary_voltage + '\', "secondary_voltage"=\''+req.body.secondary_voltage + '\', "manufacturer"=\''+req.body.manufacturer + '\', "PCB_status"=\''+req.body.PCB_status + '\', "created_by"=\''+ req.body.created_by + '\' WHERE "id"=\'' + req.params.eqId + '\' RETURNING *;';
  // const sqlQuery = 'SELECT * FROM equipment;';
  // write code here
  db.query(sqlQuery).then(sqlRes =>{
    console.log('Query response: ', sqlRes.rows);
    res.locals.eqData = sqlRes.rows;
    return next();
  })
    .catch(e => {
      next({
        log: 'detecController.updateEquipment error: ' + e,
        message: {err: 'Failed to update equipment, see server logs'}
      });
    });
};



module.exports = detecController;
