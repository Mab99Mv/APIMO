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

exports.createDocument = async (req, res) => {
  const { objectId, reactionId } = req.body;

  try {
    const existingDocument = await MyModel.findOne({
      '_id.objectId': objectId,
      '_id.reactionId': reactionId,
    });

    if (existingDocument) {
      console.log('El documento ya existe:', existingDocument);
      res.status(400).send('El documento ya existe');
    } else {
      const newDocument = new MyModel({
        _id: {
          objectId: objectId,
          reactionId: reactionId,
        },
      });

      await newDocument.save();
      console.log('Documento creado:', newDocument);
      res.status(201).json(newDocument);
    }
  } catch (error) {
    console.error('Error al crear el documento:', error);
    res.status(500).send('Error interno del servidor');
  }
};

