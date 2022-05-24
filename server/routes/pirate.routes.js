const PirateController = require('../controllers/pirate.controllers');

module.exports = function(app){
    app.get('/api/', PirateController.getAllPirates);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.post('/api/pirates/add', PirateController.addPirate);
    app.delete("/api/pirates/delete/:id", PirateController.deletePirate);
}