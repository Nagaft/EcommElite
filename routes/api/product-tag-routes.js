const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.findAll();
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});


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

router.post('/', async (req, res) => {
    try {
        const productTagData = await ProductTag.create(req.body);
        res.status(200).json(productTagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const productTagData = await ProductTag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!productTagData[0]) {
            res.status(404).json({ message: 'No product-tag found with that id!' });
            return;
        }

        res.status(200).json(productTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

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
