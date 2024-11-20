const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Test routes
const { createTest, updateTest, deleteTest, getTest, getAllTest } = require('../controllers/test');
// 
router.post("/test/create", checkAuthorizationHeaders,authorizeUser("createTest") ,createTest);
router.put("/test/update/:id", checkAuthorizationHeaders,authorizeUser("updateTest"), updateTest);
router.delete("/test/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteTest"), deleteTest);
router.get("/test/get/:id", checkAuthorizationHeaders, authorizeUser("readTest"), getTest);
router.get("/test/getAll", checkAuthorizationHeaders, authorizeUser("readTest"), getAllTest);

  
module.exports = router;
