const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

//  const { employee } = require('../models/employee');
 const  employee1  = require('../controller/employee1.controller');

router.post('/Notebook', employee1.Notebook);
router.post('/add',employee1.add);
router.post('/Sanitizer', employee1.Sanitizer);
router.post('/Cart', employee1.Cart);
router.post('/Bag',employee1.Bag);
module.exports = router