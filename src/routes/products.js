// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {index,create,store,detail,edit,update,destroy} = require('../controllers/productsController');
const { uploadProductImages } = require('../middlewares/upload')
/*** GET ALL PRODUCTS ***/ 
router.get('/',index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', create); 

router.post('/create/',uploadProductImages.single('image'),store);

router
/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', edit); 

router.put('/edit/:id',uploadProductImages.single('image'), update);


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', destroy); 


module.exports = router;
