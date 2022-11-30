const router =require('express').Router();
const productCtrl=require('./controllers')

router.route('/')
    .get(productCtrl.get)
    .post(productCtrl.post);

router.route('/:id')
    // .get(productCtrl.getById)
    .put(productCtrl.update)
    .delete(productCtrl.remove);


module.exports =router;