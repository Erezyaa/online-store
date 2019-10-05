const products = require('../models/product')
const Category = require('../models/category');

module.exports = {
    all: (req, res) => {
        Category.find()
            .then(categories => res.json(categories))
            .catch(err => res.status(500).json(err));
    },
    create: (req, res) => {
        const category = new Category(req.body);
        category.save()
            .then(category => res.json(category))
            .catch(err => res.status(400).json(err));
    },
    products: (req, res) => {
        console.log(req.params.id)
        products.find({

            categoryId: req.params.id
        })
            .then(products => res.json(products))
            .catch(err => res.status(500).json(err));
    }
};