//let { products } = require('../database/dataBase')
const db = require('../database/models')

const Products = db.Product;
const user = db.user; 
const Categories = db.Category; 
const Subcategories = db.Subcategory; 

let controller = {
    index: (req, res) => {
        products.findAll()
        include: [{ association: 'productImages'}],
        where; {
            discount: {
                [Op.get]; 5
            }
          }
        },
        .then((product) => {
            res.send('home', {
            sliderTitle: "Ofertas destacadas",
            sliderProducts: productsInSale,
            session: req.session
        })
        .catch(error => console.log(error))
    })


module.exports = controllers