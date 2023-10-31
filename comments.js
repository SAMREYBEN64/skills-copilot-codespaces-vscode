// Create web server

// Import express
const express = require('express');
// Import comment model
const Comment = require('../models/comment');
// Import comment controller
const commentController = require('../controllers/commentController');

// Create router
const router = express.Router();

// Get all comments
router.get('/', commentController.comment_list);

// Get comment by id
router.get('/:id', commentController.comment_detail);

// Create comment
router.post('/', commentController.comment_create);

// Update comment
router.put('/:id', commentController.comment_update);

// Delete comment
router.delete('/:id', commentController.comment_delete);

// Export router
module.exports = router;
