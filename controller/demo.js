const { default: mongoose } = require("mongoose")
const user = require("../models/user")

exports.sort = (req, res) => {
  try {
        let s =  new user ({
           input : req.body.input
        })
        s.save().then((data)=> {
          data.sort()
          res.status(200).json({"message": "successfully sorted", data})
        })
  } catch (error) {
      console.log(error)
  }
   }