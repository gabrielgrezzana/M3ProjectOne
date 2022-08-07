const brandsService = require('../services/brands.service');

const findAllBrandsController = (req, res) => {
  const brands = brandsService.findAllBrandsService();
  res.send(brands);
};

const findByIdBrandsController = (req, res) => {
  const paramsId = Number(req.params.id);
  const selectBrand = brandsService.findByIdBrandsService(paramsId);
  res.send(selectBrand);
};

const deleteBrandController = (req, res) => {
  const idParam = req.params.id;
  brandsService.deleteBrandService(idParam);
  res.send({ message: 'Brand sucess delete!.' });
};

const createBrandController = (req, res) => {
  const brand = req.body;
  const newBrand = brandsService.createBrandService(brand);
  res.send(newBrand);
};

const editBrandController = (req, res) => {
  const idParam = Number(req.params.id);
  const brandEdit = req.body;
  const editedBrand = brandsService.editBrandService(idParam, brandEdit);
  res.send(editedBrand);
};

module.exports = {
  findAllBrandsController,
  findByIdBrandsController,
  deleteBrandController,
  createBrandController,
  editBrandController,
};
