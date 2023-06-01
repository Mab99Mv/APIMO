const MyModel = require('../models/ModelComment');

exports.getDocumentsByObjectId = async (req, res) => {
  const { objectId } = req.params;

  try {
    const documentos = await MyModel.find({ 'objectId': objectId });

    if (documentos.length > 0) {
      console.log('Documentos encontrados:', documentos);
      res.json(documentos);
    } else {
      console.log('No se encontraron documentos');
      res.status(404).send('No se encontraron documentos');
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
};
