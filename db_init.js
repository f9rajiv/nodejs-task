const dbConfig =require('./configs/db.configs')
const mongoose =require('mongoose')
const conxnURL = dbConfig.conxnURL + '/' + dbConfig.dbName;
mongoose.connect(conxnURL,function(err,done){
    if (err) {
        console.log('error in db connection >>>',err)
    
    }
    else{
        console.log('db connection successful')
        console.log('press ctrl + c to break ')
    }
})