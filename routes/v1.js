var etlDim = require('../src/routers/v1/etl-dim-router');
var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');

module.exports = function (server) {
    etlDim().applyRoutes(server, "/v1/etl/dim");
    etlFactPuchasingRouter().applyRoutes(server, "/v1/etl/purchasing");
};
