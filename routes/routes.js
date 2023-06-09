const express = require('express');
const router = express.Router();
const controllerReactions = require('../controllers/ContollerSumaryReactions');
const controllerComments = require('../controllers/ControllerComments');

router.get('/reactions/:objectId/count', controllerReactions.getDocumentReactionsCount);
router.get('/reactions', controllerReactions.getAllDocuments);
router.post('/reactions', controllerReactions.createDocument);
router.get('/comments/:objectId', controllerComments.getDocumentsByObjectId);

module.exports = router;





