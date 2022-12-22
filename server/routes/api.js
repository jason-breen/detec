const express = require('express');

const detecController = require('../controllers/detecController');

const router = express.Router();

router.get('/',
  detecController.getEquipment,
  (req, res) => {
    // console.log('eqData in apiRouter: ', res.locals.eqData);
    res.status(200).json(res.locals.eqData);
  }
);

router.post('/equipment',
  detecController.addEquipment,
  (req, res) => {
    // console.log('eqData in apiRouter: ', res.locals.eqData);
    res.status(200).json(res.locals.eqData);
  }
);

router.delete('/equipment/:eqId',
  detecController.deleteEquipment,
  (req, res) => {
    // console.log('eqData in apiRouter: ', res.locals.eqData);
    res.status(200).json(`Item with record ID ${req.params.eqId} deleted`);
  }
);

router.patch('/equipment/:eqId',
  detecController.updateEquipment,
  (req, res) => {
    // console.log('eqData in apiRouter: ', res.locals.eqData);
    res.status(200).json(`Item with record ID ${req.params.eqId} updated as follows: ${res.locals.eqData}`);
  }
);

module.exports = router;


