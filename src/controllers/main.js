const shirtsModel = require("../models/shirts")
const glassesModel = require("../models/glasses")
const meshModel = require("../models/mesh")
const clockModel = require("../models/clock")

const controller = {
    index: (req, res) => {
        let productos = [];
        let shirts = shirtsModel.allWithExtras();
        let glasses = glassesModel.allWithExtras();
        let mesh = meshModel.allWithExtras();
        let clock = clockModel.allWithExtras()
        productos.push(...shirts);
        productos.push(...glasses);
        productos.push(...mesh);
        productos.push(...clock);
        // return res.send(productos)
        return res.render("index", {productos: productos})
    }
}
module.exports = controller