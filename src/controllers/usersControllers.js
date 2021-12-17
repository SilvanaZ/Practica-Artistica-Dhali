const { validationResult } = require('express-validator')
const { users } = require('../database/dataBase')

module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res)=>{
     let error = validationResult(req);
     if(error.isEmpty()){
             res.send("Te logueaste!")
     }else{
      res.render('login',{
          error: error.mapped()
      })
     }
    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res)=>{
        res.send("Algo")
    }
}

module.exports = controller