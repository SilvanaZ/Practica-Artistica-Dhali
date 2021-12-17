const { validationResult } = require('express-validator')
const {products, writeProductsJSON, categories } = require('../database/dataBase')
let 
let controller = {
    index: (req, res)=>{
    res.render('/admin/adminIndex')
    },
    products: (req, res)=>{
        res.render('/admin/adminProducts')
    },
    create: (req, res)=>{
        res.render('/admin/adminProductCreateForm', {
            categories
        })
    },
    store: (req, res) => {
        let errors= validationResult(req)
        if{errors.inEmpty()

        }else{}
        let lastId = 1;

        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        });

        const {name, price, category, subcategory, description, discount} = req.body

        let newProduct = {
            id: lastId + 1,
            name: name.trim(),
            price: +price.trim(),
            category: +category,
            subcategory,
            description: description.trim(),
            discount: +discount,
            image: req.file ? req.file.filename : "default-image.png"
        }

        /* let newProduct = {
            ...req.body,
            id: lastId + 1,
            image: req.file ? req.file.filename : "default-image.png"
        } */

        products.push(newProduct)

        writeProductsJSON(products)

        res.redirect('/admin/products')
    },
    edit: (req, res)=>{
        let productId = +req.params.id

        let product = product.find(product => product.id === productId)
        res.render('/admin/adminProductEditForm',{
        product,
        categories,
        subcategories: uniqueSubcategories
    });
},
    update: (req, res) =>{
        let productId = +req.params.id;

        let newProduct = {
            id: lastId + 1,
            name: name.trim(),
            price: +price.trim(),
            category: +category,
            subcategory,
            description: description.trim(),
            discount: +discount,
            image: req.file ? req.file.filename : "default-image.png"
    },
    destroy: (req, res)=>{

    }
}

module.exports = controller