const brands = [
  {
    id: 1,
    Brand: 'Nike',
    yearOfCreation: 1964,
    localtionOfCreation: 'Oregon EUA',
  },
  {
    id: 2,
    Brand: 'Adidas',
    yearOfCreation: 1949,
    localtionOfCreation: 'Herzogenaurach Alemanha',
  },
  {
    id: 3,
    Brand: 'Razer',
    yearOfCreation: 2005,
    localtionOfCreation: 'San Diego California EUA',
  },
  {
    id: 4,
    Brand: 'Asus',
    yearOfCreation: 1989,
    localtionOfCreation: 'Taipé Taiwan',
  },
  {
    id: 5,
    Brand: 'Amazon',
    yearOfCreation: 1994,
    localtionOfCreation: 'Washington EUA',
  },
  {
    id: 6,
    Brand: 'Apple',
    yearOfCreation: 1976,
    localtionOfCreation: 'Los Altos California EUA',
  },
];

const findAllBrandsService = () => {
  return brands;
};

const findByIdBrandsService = (paramsId) => {
  return brands.find((brand) => brand.id === paramsId);
};

const deleteBrandService = (id) => {
  const brandIndex = brands.findIndex((brand) => brand.id == id);
  return brands.splice(brandIndex, 1);
};

const createBrandService = (newBrand) => {
  const newId = brands.length + 1;
  newBrand.id = newId;
  brands.push(newBrand);
  return newBrand;
};

const editBrandService = (id, brandEdit) => {
  brandEdit[1] = id;
  const brandIndex = brands.findIndex((brand) => brand.id == id);
  brands[brandIndex] = brandEdit;
};

module.exports = {
  findAllBrandsService,
  findByIdBrandsService,
  deleteBrandService,
  createBrandService,
  editBrandService,
};
