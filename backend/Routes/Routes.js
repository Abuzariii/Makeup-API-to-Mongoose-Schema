// Imports
const express = require("express");
const { createItem } = require("../Controllers/Controllers");

// Initializations
const router = express.Router();

// All Routes

// Create a New Item
router.post("/post", createItem);

// Export
module.exports = router;
