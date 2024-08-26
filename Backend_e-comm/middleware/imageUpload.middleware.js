const multer = require('multer')
const FILE_TYPE_MAP={
  'image/png':'png',
  'image/jpeg':'jpeg',
  'image/jpg':'jpg'
}
const MAX_FILE_SIZE= 1024* 1024; // 1MB
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"./uploads/productImages");
      
    },
    filename: (req, file, cb) => {
      const extension = FILE_TYPE_MAP[file.mimetype]
      cb(null,`${req.user}-${file.originalname}-${Date.now()}.${extension}`);
    },
  });  
  const upload= multer({storage,
    limits:{
      fileSize:1024*1024
    },
    fileFilter:(req,file,cb)=>{
      const isValid = FILE_TYPE_MAP[file.mimetype]
      isValid?cb(null, true):cb(new multer.MulterError('Please upload valid image.'), false);
    }
  })

const handleSingleImageUpload = (req,res,next)=>{
  upload.single('productSingleImage')(req,res,err=>{
    if(err instanceof multer.MulterError){
      return res.json({error:err.message,field:err.field})
    }
    next();
  })
}

module.exports= {upload,handleSingleImageUpload}
  