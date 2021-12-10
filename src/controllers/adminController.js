const {products, writeProductsJSON } = require('../database/dataBase')

let controller = {
    index: (req, res)=>{
    res.render('/admin/adminIndex')
    },
    products: (req, res)=>{
        res.render('/admin/adminProducts')
    },
    create: (req, res)=>{
        res.render('/admin/adminProductCreateForm')
    },
    edit: (req, res)=>{
        res.render('/admin/adminProductEditForm)
    }
}