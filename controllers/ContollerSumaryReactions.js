const MyModel = require('../models/ModelSumaryReactions');

exports.getDocument = async (req, res) => {
  const { objectId, reactionId } = req.params;

  try {
    const documento = await MyModel.findOne({
      '_id.objectId': objectId,
      '_id.reactionId': reactionId,
    });

    if (documento) {
      console.log('Documento encontrado:', documento);
      res.json(documento);
    } else {
      console.log('Documento no encontrado');
      res.status(404).send('Documento no encontrado');
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
};
