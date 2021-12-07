let { products} = require('../database/dataBase')

let controller = {
    detail: (req, res) => {
        let productDetailId = +req.params.id;

        let product = products.find(product => product.id === productDetailId)
        let relatedProducts = products.filter(relatedProduct => relatedProduct.category === product.category)
        
        res.render('productDetail', {
            product,
            sliderTitle: "Productos relacionados",
            sliderProducts: relatedProducts
        })
    },
    category: (req, res)=>{
        let categoryId = +req.params.id;

        let productsCategory = products.filter(product => product.category === +productId)
        let category = categories.find(category => category.id === categoryId)
        let subcategories = productsCategory.mp(roduct => product.category === )
        let uniqueSubcategories = sub
        res.render('categories', {
            products: productsCategory,
            category
        })
    }
}

module.exports = controller