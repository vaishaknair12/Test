const {default: mongoose} = require("mongoose")
const { db } = require("../models/user")
const user = require("../models/user")


// Created an insert api to add the given array of string by sorting and store in the database 
exports.sort = (req, res) => {
  try {
        let s =  new user ({
           input : req.body.input
        })
          s.sort()
          s.save().then((data1)=> {
          res.status(200).json({"message": "successfully added and sorted", data1})
          })
       } catch (error) {
      console.log(error)
  }
   }

  