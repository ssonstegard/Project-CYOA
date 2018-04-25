

var Location = require("../models.location.js");

module.exports = function (app) {
    app.get("/api/:locations?", function (req, res) {
        if (req.params.locations) {

            Location.findOne({
                where: {
                    routeName: req.params.locations
                }
            }).then(function (result) {
                return res.json(result);
            });
        }
        else {
            Location.findAll({}).then(function (result) {
                return res.json(result);
            });
        };
    });
}