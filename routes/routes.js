const express = require('express');
const router = express.Router();
const controllerReactions = require('../controllers/ContollerSumaryReactions');
const controllerComments = require('../controllers/ControllerComments');

router.get('/api/reactions/:objectId/count', controllerReactions.getDocumentReactionsCount);
router.get('/api/reactions', controllerReactions.getAllDocuments);
router.post('/api/reactions', controllerReactions.createDocument);
router.get('/api/comments/:objectId', controllerComments.getDocumentsByObjectId);

module.exports = router;



