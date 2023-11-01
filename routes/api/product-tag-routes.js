const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

// GET todas las relaciones product-tags
router.get('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.findAll();
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET una relación product-tag por ID
router.get('/:id', async (req, res) => {
    try {
        const productTagData = await ProductTag.findByPk(req.params.id);
        if (!productTagData) {
            res.status(404).json({ message: 'No product-tag found with that id!' });
            return;
        }
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST una nueva relación product-tag
router.post('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.create(req.body);
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE una relación product-tag por ID
router.delete('/:id', async (req, res) => {
    try {
        const productTagData = await ProductTag.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!productTagData) {
            res.status(404).json({ message: 'No product-tag found with that id!' });
            return;
        }
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
