const { users } = require('../database/dataBase');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const db = require('../database/models')

const Products = db.Product;
const user = db.user; 
const Categories = db.Category; 
const Subcategories = db.Subcategory;

let controller = {
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
       let user = users.find(user => user.email === req.body.email)
       
       req.session.user = {
        id: user.id,
        name:user.name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
        rol: user.rol
       }

        }else{
            res.render('login', {
                errors: errors.mapped()
            })
        }
    },
    register: (req, res) => {
        res.render('register',{
            session: req.session
        })
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty){
            let lastId = 1;
            req.session.user = {
                id: user.id,
                name:user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }
            res.locals.user = req.session.user;

            res.redirect('/') }

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let { name, last_name, email, pass } = req.body

            let newUser = {
                name,
                last_name,
                email, 
                pass,
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER",
                tel: "",
                address: "",
                pc: "",
                city: "",
                province: ""
            }

            users.push(newUser)

            writeUsersJSON(users)

            res.redirect('/users/login')

        },
        logout: (req, res) =>{
            req.session.dstroy();
            if(req.cookie.userArtisticaDhali){
                ress.cookie('userArtisticaDhali', "",{maxAge: -1 })
            }
            res.redirect
        }
    }

module.exports = controller