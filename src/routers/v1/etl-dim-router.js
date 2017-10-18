var Router = require("restify-router").Router;
var messageSender = require("../../message-sender");
var DimDivision = require("dl-module").etl.dim.dimDivision;
var DimSupplier = require("dl-module").etl.dim.dimSupplier;

var dbConnect = require("../../db");
var sqlConnect = require("../../sql-db");

const apiVersion = "1.0.0";

function getRouter() {

    var router = new Router();

    router.get("/", function (request, response, next) {

        var message = {
            body: "Test message",
            customProperties: {
                testproperty: "TestValue"
            }
        };

        messageSender.send(message)
            .then((result) => {
                response.send(200, result);
            })
            .catch((e) => {
                response.send(500, e);
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance2 = new DimDivision(db, {
                        username: "unit-test"
                    }, sql);

                    instance2.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });

        Promise.all([dbConnect, sqlConnect])
            .then((result) => {
                var db = result[0];
                var sql = result[1];
                db.get().then((db) => {
                    var instance3 = new DimSupplier(db, {
                        username: "unit-test"
                    }, sql);

                    instance3.run()
                        .catch((e) => {
                            done(e);
                        });
                });
            });
    });

    return router;
}

module.exports = getRouter;