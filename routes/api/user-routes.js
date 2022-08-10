const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
   
   } = require('../../controllers/user-controller');
 
 const router = require('express').Router();
 
 router.route("/users").get(getAllUsers)
 
 router.route("/").post(createUser)
 
 router.route("/:id").get(getUserById)
 
 router.route('/:id/').put(updateUser)
 
 router.route('/:id/').delete(deleteUser);
 
 
 module.exports = router;