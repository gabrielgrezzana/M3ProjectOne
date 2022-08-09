const brandsService = require('../services/brands.service');

const findAllBrandsController = (req, res) => {
  const brands = brandsService.findAllBrandsService();
  if (brands.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nem uma brand cadastrada' });
  }
  res.send(brands);
};

const findByIdBrandsController = (req, res) => {
  const paramsId = Number(req.params.id);

  if (!paramsId) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const selectBrand = brandsService.findByIdBrandsService(paramsId);
  if (!selectBrand) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(selectBrand);
};

const deleteBrandController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  brandsService.deleteBrandService(idParam);

  res.send({ message: 'Brand sucess delete!.' });
};

const createBrandController = (req, res) => {
  const brand = req.body;

  if (
    !brand ||
    !brand.Brand ||
    !brand.yearOfCreation ||
    !brand.localtionOfCreation
  ) {
    return res.status(400).send({ message: 'Envie todos os campos da Brand!' });
  }
  const newBrand = brandsService.createBrandService(brand);
  res.status(201).send(newBrand);
};

const editBrandController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  const brandEdit = req.body;

  if (
    !brandEdit ||
    !brandEdit.Brand ||
    !brandEdit.yearOfCreation ||
    !brandEdit.localtionOfCreation
  ) {
    return res.status(400).send({ message: 'Envie todos os campos da Brand!' });
  }
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
