const router = require('express').Router();
const controllerBrands = require('../controllers/brands.controllers');

router.get('/allBrands', controllerBrands.findAllBrandsController);
router.get('/selectionBrand/:id', controllerBrands.findByIdBrandsController);
router.delete('/delete/:id', controllerBrands.deleteBrandController);
router.post('/create', controllerBrands.createBrandController);
router.put('/update/:id', controllerBrands.editBrandController);

module.exports = router;
