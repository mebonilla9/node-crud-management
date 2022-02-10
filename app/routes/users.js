const controller = require('../controllers/users');
const router = require('express').Router();

// Crud routers
router.get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', controller.createOne)
  .put('/:id', controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;