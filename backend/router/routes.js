const express = require("express")
const {createUser, loginUser} = require("../controllers/auth");
const { addProduct, getProducts } = require("../controllers/product");
const multer = require("multer")
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"uploads")
//     },
//     filename:function(req,file,cb){
//         cb(null,`${file.originalname}`)
//     }
// })
const upload = multer({storage:multer.memoryStorage()})

const router = express();

router.post("/register",createUser),
router.post("/login",loginUser),
router.post("/addProduct",upload.array('image'),addProduct),
router.get("/getproducts",getProducts)
// router.post("/uploadImage", , imageupload)

module.exports = router;