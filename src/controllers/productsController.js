let { products} = require('../database/dataBase')

let controller = {
    detail: (req, res) => {
        let productDetail = +req.params.id;
         
        

        let product = product.find(product => product.id === productDetailId)
        
        res.render('productDetail', {
            product
        })
    }
}

module.exports = controller