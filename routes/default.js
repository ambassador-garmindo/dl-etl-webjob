var etlFactPuchasingRouter = require('../src/routers/v1/etl-fact-purchasing-router');
var etlFactTotalHutangRouter = require('../src/routers/v1/etl-fact-total-hutang-router');
var etlDimCategoryRouter = require('../src/routers/v1/etl-dim-category-router');
var etlDimDivisionRouter = require('../src/routers/v1/etl-dim-division-router');
var etlDimSupplierRouter = require('../src/routers/v1/etl-dim-supplier-router');
var etlDimUnitRouter = require('../src/routers/v1/etl-dim-unit-router');
var etlFactMonitoringEvent = require('../src/routers/v1/etl-fact-monitoring-event-router');
var etlFactSalesContract = require('../src/routers/v1/etl-fact-sales-contract-router');

module.exports = function (server) {
    etlFactPuchasingRouter().applyRoutes(server, "/etl/purchasing");
    etlFactTotalHutangRouter().applyRoutes(server, "/etl/total-hutang");
    etlDimCategoryRouter().applyRoutes(server, "/etl/dim-category");
    etlDimDivisionRouter().applyRoutes(server, "/etl/dim-division");
    etlDimSupplierRouter().applyRoutes(server, "/etl/dim-supplier");
    etlDimUnitRouter().applyRoutes(server, "/etl/dim-unit");
    etlFactMonitoringEvent().applyRoutes(server, "/etl/fact-monitoring-event");
    etlFactSalesContract().applyRoutes(server, "/etl/fact-sales-contract");
};
