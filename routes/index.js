const router = require('express').Router()
const UserController = require('../controllers/UserController')
const FormController = require('../controllers/FormController')

router.get('/personal', UserController.getData)
router.get('/personal/:id', UserController.getDataById)
router.post('/personal', UserController.personal)
router.post('/form', FormController.addForm)

module.exports = router