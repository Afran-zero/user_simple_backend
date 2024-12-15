const express = require('express');
const router = express.Router();
const { registerUser, loginUser, protect, getUserProfile, getAllUsers, updateUserProfile, deleteUserProfile } = require('../controllers/authController');

// User Registration and Login
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected Routes (Requires Authentication)
router.get('/profile', protect, getUserProfile); // Single user profile
router.get('/users', protect, getAllUsers); // All users profile
router.put('/profile', protect, updateUserProfile); // Update single user profile
router.delete('/profile', protect, deleteUserProfile); // Delete user profile

module.exports = router;
