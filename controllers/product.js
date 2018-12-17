var Product = require('../models/product');
var Income = require('../models/income');
var Expense = require('../models/expense');
var ExpenseCategory = require('../models/expensecategory');
var IncomeCategory = require('../models/incomecategory');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res, next) {
    var Owner = new Product(
        {
            name: req.body.name,
            plotno: req.body.plotno,
            mobilenumber: req.body.mobilenumber,
            Role: req.body.Role              
        }
    );

    Owner.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
exports.get_userdetails = function (req, res, next) {
    Product.findOne({plotno:req.params.plotno}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
exports.income_create = function (req, res, next) {
    var IncomeNM = new Income(
        {
           
                plotno:  req.body.plotno,
                month: req.body.month,
                year: req.body.year,
                amount: req.body.amount,
                category: req.body.category,
                categoryid: req.body.categoryid,
                updatedOn: Date.now()           
        }
    );

    IncomeNM.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.get_income = function (req, res, next) {
    Income.findOne({plotno:req.params.plotno}, function (err, income) {
        if (err) return next(err);
        res.send(income);
    })
};
exports.expense_create = function (req, res, next) {
    var ExpenseNM = new Expense(
        {
           
                
                month: req.body.month,
                year: req.body.year,
                paid: req.body.paid,
                billed: req.body.billed,
                balance: req.body.balance,
                status: req.body.status,
                category: req.body.category,
                categoryid: req.body.categoryid,
                Notes:req.body.Notes,
                updatedOn: Date.now()           
        }
    );

    ExpenseNM.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.get_expense = function (req, res, next) {
    Expense.find({month:req.params.month}, function (err, expense) {
        if (err) return next(err);
        res.send(expense);
    })
};

exports.expense_category_create = function (req, res, next) {
    var ExpenseCategoryNM = new ExpenseCategory(
        {
               category: req.body.category
              
        }
    );

    ExpenseCategoryNM.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.get_expensecategory = function (req, res, next) {
    ExpenseCategory.find(function (err, expense) {
        if (err) return next(err);
        res.send(expense);
    })
};

exports.income_category_create = function (req, res, next) {
    var IncomeCategoryNM = new IncomeCategory(
        {
               category: req.body.category
              
        }
    );

    IncomeCategoryNM.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.get_incomecategory = function (req, res, next) {
    IncomeCategory.find(function (err, expense) {
        if (err) return next(err);
        res.send(expense);
    })
};
/*
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};*/

