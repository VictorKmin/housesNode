const router = require('express').Router();

const getHouseById = require('../controllers/house/getOneById');
const getAllHouse = require('../controllers/house/getAll');
const getAllByCity = require('../controllers/house/getAllByCity');
const createHouse = require('../controllers/house/createHouse');

router.get('/:id', getHouseById);
router.get('/', getAllHouse);
router.get('/:city', getAllByCity);
router.post('/' , createHouse);

module.exports = router;
