const productQuery =require('./query')
function get(req,res,next){
    
    productQuery
    .find()
    .then(function(results){
        res.json(results)
    })
    .catch(function(err){
        next(err)
    })
    
}

function post(req,res,next){
    
    const data =req.body;
     productQuery
     .insert(data)
     .then(function(response){
        res.json(response)
     })
     .catch(function(err){
        next(err);
     })
}
function update(req,res,next){
const  data =req.body
productQuery
.update(req.params.id,data)
.then(function(response){
    res.json(response)
})
.catch(function(err){
    next(err);
    
})
}

function remove(req,res,next){
    productQuery.remove(req.params.id)
    .then(function(response){
        if (!response){
            return next({
                msg:'Product Not Found',
                status:404
            })
        }
        res.json(response)
    })
    .catch(function(err){
        next(err)
    }) 
}
module.exports={
    get,
    post,
    update,
    remove,
}