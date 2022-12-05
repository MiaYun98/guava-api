const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addfriends,
  deletefriends,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)

// /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').post(addfriends).delete(deletefriends)

module.exports = router;
