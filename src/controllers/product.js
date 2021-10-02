const shirtsModel = require("../models/shirts");
const glassesModel = require("../models/glasses");
const meshModel = require("../models/mesh");
const clockModel = require("../models/clock");

const controller = {
    detail: (req, res) => {
        let producto = [];
        if (req.params.category == 1) {
            producto = meshModel.oneWithExtras(req.params.id);
        }
        if (req.params.category == 2) {
            producto = glassesModel.oneWithExtras(req.params.id);
        }
        if (req.params.category == 3) {
            producto = shirtsModel.oneWithExtras(req.params.id);
        }
        if (req.params.category == 4) {
            producto = clockModel.oneWithExtras(req.params.id);
        }
        // let productos = [];
        // let shirts = shirtsModel.allWithExtras();
        // let glasses = glassesModel.allWithExtras();
        // let mesh = meshModel.allWithExtras();
        // let clock = clockModel.allWithExtras();
        // productos.push(...shirts);
        // productos.push(...glasses);
        // productos.push(...mesh);
        // productos.push(...clock);
        return res.render("products/detail", {
            producto: producto,
            // productos: productos,
            title: "Beach Flow | Detail"
        });
    },
    cart: (req, res) => {
        let producto = [];
        return res.render("products/cart", {
            producto: producto,
            title: "Beach Flow | Cart"
        });
    }
}
module.exports = controller;