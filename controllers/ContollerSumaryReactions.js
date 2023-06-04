const MyModel = require('../models/ModelSumaryReactions.js');

// Obtener un documento por objectId y reactionId
exports.getDocument = async (req, res) => {
  const { objectId, reactionId } = req.params;

  try {
    const documento = await MyModel.findOne({
      objectId: objectId,
      reactionId: reactionId,
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

// Crear un nuevo documento
exports.createDocument = async (req, res) => {
  try {
    const { objectId, reactionId, data } = req.body;

    // Crea un nuevo documento utilizando el modelo correspondiente
    const nuevoDocumento = new MyModel({
      objectId: objectId,
      reactionId: reactionId,
      data: data
    });

    // Guarda el documento en la base de datos
    const documentoCreado = await nuevoDocumento.save();

    console.log('Documento creado:', documentoCreado);
    res.json(documentoCreado);
  } catch (error) {
    console.error('Error al crear el documento:', error);
    res.status(500).send('Error interno del servidor');
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documentos = await MyModel.find();
    console.log('Documentos encontrados:', documentos);
    res.json(documentos);
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    res.status(500).send('Error interno del servidor');
  }
};
