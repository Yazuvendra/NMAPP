var express = require('express');
var router = express.Router();
var path    = require("path");

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/product');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.get('/',function (req, res, next){   
       
     res.sendFile('index.html');

});
router.post('/create', product_controller.product_create);
router.get('/getUser/:plotno', product_controller.get_userdetails);

router.post('/createincome', product_controller.income_create);
router.get('/getincome/:plotno', product_controller.get_income);

router.post('/createexpense', product_controller.expense_create);
router.get('/getexpense/:month', product_controller.get_expense);

router.post('/createexpensecategory', product_controller.expense_category_create);
router.get('/getexpensecategory', product_controller.get_expensecategory);

router.post('/createincomecategory', product_controller.income_category_create);
router.get('/getincomecategory', product_controller.get_incomecategory);

/*router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);*/


module.exports = router;