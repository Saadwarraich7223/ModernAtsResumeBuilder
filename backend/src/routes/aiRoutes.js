const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const auth = require('../middleware/auth');

// Note: For now we'll skip auth to make it easy to test, 
// but in production these should be protected with 'auth' middleware.

router.post('/generate-summary', aiController.generateSummary);
router.post('/improve-bullet', aiController.improveBullet);
router.post('/suggest-skills', aiController.suggestSkills);
router.post('/analyze-ats', aiController.analyzeATS);

module.exports = router;
