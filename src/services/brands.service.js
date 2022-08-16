const Brands = require('../models/Brands');

const findAllBrandsService = async () => {
  const brands = await Brands.find();
  return brands;
};

const findByIdBrandsService = async (paramsId) => {
  const brand = await Brands.findById(paramsId);
  return brand;
};

const deleteBrandService = async (id) => {
  return await Brands.findByIdAndDelete(id);
};

const createBrandService = async (newBrand) => {
  const brandCreated = await Brands.create(newBrand);
  return brandCreated;
};

const editBrandService = async (id, brandEdit) => {
  const brandUpdate = await Brands.findByIdAndUpdate(id, brandEdit);
  return brandUpdate;
};

module.exports = {
  findAllBrandsService,
  findByIdBrandsService,
  deleteBrandService,
  createBrandService,
  editBrandService,
};
