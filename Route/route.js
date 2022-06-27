const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

//  const { employee } = require('../models/employee');
 const  demo  = require('../controller/demo');

router.post('/sort', demo.sort);

module.exports = router