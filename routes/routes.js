const express = require('express');
const router = express.Router();
const controllerReactions = require('../controllers/ContollerSumaryReactions');
const controllerComments = require('../controllers/ControllerComments');

router.get('/reactions/:objectId/:reactionId', controllerReactions.getDocument);
router.post('/reactions', controllerReactions.createDocument);
router.get('/comments/:objectId', controllerComments.getDocumentsByObjectId);

module.exports = router;

