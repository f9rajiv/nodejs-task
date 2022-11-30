const ProductModel =require('./model');
function map_product_req(productData,product){
    if(productData.product_name)
    product.product_name=productData.product_name;

    if(productData.category_name)
        product.category_name=productData.category_name;

    if(productData.description)
        product.description=productData.description;

    if(productData.created_by)
        product.created_by=productData.created_by;

    if(productData.status)
        product.status=productData.status;
}
function find(){
    return ProductModel
    .find()
    .exec()
}

function insert(data){
    const newProduct=new ProductModel({});
    map_product_req(data,newProduct)
    return newProduct.save()
}

function update(id,data){
    return new Promise(function(resolve,reject){
        ProductModel.findById(id,function(err,product){
            if (err){
            return reject(err);
            }
            if(!product){
            return reject({
                msg:'productNot FOund',
                status:404
            }) }
    
         map_product_req(data,product)
         product.save(function(err,updated){
            if(err){
                return reject(err);
            }
            resolve(updated)
            })
        })
    })

}

function remove(id){
return ProductModel.findByIdAndRemove(id) 

}

module.exports={
find,
insert,
update,
remove,
}