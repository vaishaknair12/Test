var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let employeeSchema = new Schema({
    EmployeeName: { type: String, default: '' },
    EmployeeAddress: { type: String, default: '' },
    Designation: { type: String, default: '' },
    DOJ: { type: Date, default: null },
    DOR: { type: Date, default: null }
},
    { timestamps: true }
);

module.exports = mongoose.model('employee', employeeSchema);