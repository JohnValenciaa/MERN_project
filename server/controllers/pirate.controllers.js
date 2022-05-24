const { Pirate } = require('../models/pirate.models')

module.exports.addPirate = (request, response) => {
    const { name } = request.body;
    Pirate.create(request.body)
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirates => response.json(pirates))
        .catch(err => response.status(400).json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

