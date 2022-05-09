const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

//  const { employee } = require('../models/employee');
 const  employee1  = require('../controller/employee1.controller');

router.post('/addEmployee', employee1.addEmployee);
router.post('/getAllEmployee', employee1.getAllEmployee);
router.post('/getEmployeesCount', employee1.getEmployeesCount);
router.post('/updateEmployeeDetails', employee1.updateEmployeeDetails);
router.post('/deleteEmployee',employee1.deleteEmployee);
router.post('/updateSeniors', employee1.updateSeniors);
router.post('/updateAddress', employee1.updateAddress);
router.post('/updateDesignation', employee1.updateDesignation)
module.exports = router