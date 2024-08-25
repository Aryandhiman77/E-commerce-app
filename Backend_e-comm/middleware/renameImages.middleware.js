const fs = require('fs')
const path = require('path')
const renameImages = (req,res,next)=>{
    req.files.forEach((file,i) => {
        let newfilepath =  file.path.split('/')[0]+"/"+file.path.split('/')[1]+"/"+req.user+"-"+Date.now()+"-"+i+path.extname(file.originalname)
            fs.renameSync(file.path,newfilepath, function(err) {
                if ( err ) {
                    console.log('ERROR: ' + err)
                }
            });
    });
    next();
}

module.exports = renameImages