const mongoose = require('mongoose');
const employee = require('../models/employee');

exports.addEmployee = (req, res) => {
    try {
        let addEmployee = new employee({
            EmployeeName: req.body.EmployeeName,
            EmployeeAddress: req.body.EmployeeAddress,
            Designation: req.body.Designation,
            DOJ: req.body.DOJ,
            DOR: req.body.DOR
        })
        addEmployee.save().then(data => {
          res.status(200).json({"message": "success"})
        }).catch(err => console.log(err))
    } catch (err) {
        console.log(err)
    }
}

exports.getAllEmployee = (req, res) => {
    try {
         employee.find({}).then((data) => {
             res.send(data)
         })
        } catch (error) {
        console.log(error)
    }
}

exports.getEmployeesCount = (req, res) => {
    try {
        employee.countDocuments({}).then((data) => {
            res.status(200).json({"message": "success", count: data})
        })
    } catch (error) {
        
    }
}

exports.updateEmployeeDetails = (req, res) => {
try {
    var values = req.body.values;
    employee.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.body.employeeID)}, {$set: values}).then((data)=> {
        res.status(200).json({"message": "successfully updated"})
    })
    } catch (error) {
    console.log(error)
}
}

exports.deleteEmployee = (req, res) => {
try {
        employee.deleteMany({DOR : { $lt: new Date() }}).then((data1) => {
         res.status(200).json({"message": "successfully deleted"})
         })
    } catch (error) {
    console.log(error)
}
}


exports.updateSeniors = (req, res) => {
    try {
        employee.findByIdAndUpdate({_id:mongoose.Types.ObjectId(req.body.employeeID)}, {$set: {Designation: "Manager"}}).then((data)=> {
            res.status(200).json({"message": "successfully updated", data})
        })
    } catch (error) {
        console.log(error)
    }
}


exports.updateAddress = (req, res) => {
    try {
        var values = req.body.values;
        employee.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.body.employeeID)}, {$set: {EmployeeAddress: values.EmployeeAddress}}).then((data) => {
            res.status(200).json({"message": "successfully updated", data})
        })
    } catch (error) {
        console.log(error)
    }
}


exports.updateDesignation = (req, res) => {
    try {
        var values = req.body.values;
                employee.findByIdAndUpdate({_id: mongoose.Types.ObjectId(req.body.employeeID)}, {$set: {Designation: values.Designation}})
                .then((data) => {
                    res.status(200).json({"message": "successfully updated", data})
                })
        } catch (error) {
        console.log(error)
    }
}