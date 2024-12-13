const multer = require("multer")
const Storage =multer.diskStorage({
    destination :(req,file,cb)=>{    
        cb(null,"product/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname +"-"+ Date.now())
    }
})

const product=multer({storage:Storage}).single("productimage")

module.exports=product;