const brandsService = require('../services/brands.service');
const mongoose = require('mongoose');

const findAllBrandsController = async (req, res) => {
  const brands = await brandsService.findAllBrandsService();
  if (brands.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nem uma brand cadastrada' });
  }
  res.send(brands);
};

const findByIdBrandsController = async (req, res) => {
  const paramsId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(paramsId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const selectBrand = await brandsService.findByIdBrandsService(paramsId);
  if (!selectBrand) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  res.send(selectBrand);
};

const deleteBrandController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  await brandsService.deleteBrandService(idParam);

  res.send({ message: 'Brand sucess delete!.' });
};

const createBrandController = async (req, res) => {
  const brand = req.body;

  if (
    !brand ||
    !brand.brand ||
    !brand.yearOfCreation ||
    !brand.localtionOfCreation
  ) {
    return res.status(400).send({ message: 'Envie todos os campos da Brand!' });
  }
  const newBrand = await brandsService.createBrandService(brand);
  res.status(201).send(newBrand);
};

const editBrandController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const brandEdit = req.body;

  if (
    !brandEdit ||
    !brandEdit.brand ||
    !brandEdit.yearOfCreation ||
    !brandEdit.localtionOfCreation
  ) {
    return res.status(400).send({ message: 'Envie todos os campos da Brand!' });
  }
  const editedBrand = await brandsService.editBrandService(idParam, brandEdit);
  res.send(editedBrand);
};

module.exports = {
  findAllBrandsController,
  findByIdBrandsController,
  deleteBrandController,
  createBrandController,
  editBrandController,
};
