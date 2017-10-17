var etlDim = require('../src/routers/v1/etl-dim-router');
var etlFactProductionRouter = require('../src/routers/v1/etl-fact-production-router');
var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactSalesRouter = require('../src/routers/v1/etl-fact-sales-router');

module.exports = function (server) {
    etlDim().applyRoutes(server, "/etl/dim");
    etlFactProductionRouter().applyRoutes(server, "/etl/production");
    etlFactPuchasingRouter().applyRoutes(server, "/etl/purchasing");
    etlFactSalesRouter().applyRoutes(server, "/etl/sales");
};
