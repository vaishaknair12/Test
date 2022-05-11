const mongoose = require('mongoose');
const employee = require('../models/employee');

   exports.Notebook = (req, res) => {
     try {
       let totalP = req.body.totalP
        if (totalP >= 500){
               totalP =  totalP * 10/100
      }else {
             totalP = totalP
            }
            console.log(totalP)
        } catch (error) {
            console.log(error)
        }
    }


    exports.Sanitizer = (req, res) => {
    try {
        let TotalIndividualPrice = req.body.price;
         if (TotalIndividualPrice > 3000) {
               TotalIndividualPrice = TotalIndividualPrice - 100
         } else {
            TotalIndividualPrice = TotalIndividualPrice
         }
         console.log(TotalIndividualPrice)
    } catch (error) {
        console.log(error)
    }
    }


    exports.Cart = (req, res) => {
    try {
          let totalAmount = req.body.price;
             if(totalAmount > 10000){
                 console.log({PromoCode:"Prime123 Applied"})
                 totalAmount = totalAmount - 123
             }else {
                totalAmount = totalAmount
             }
             console.log(totalAmount)
         } catch (error) {
        console.log(error)
    }
    }



    exports.Bag = (req, res) => {
    try {
           let price;
           bagPurchase = req.body.quantity;
            if(bagPurchase === 2){
                 price = 1500; 
            }
            console.log(price)
    } catch (error) {
        console.log(error)
    }
    }