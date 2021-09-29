const path =  require("path");
const fs = require("fs");
const imgModel = require("./img");
const model = {
    directory: path.resolve(__dirname, "../data", "glasses.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id => model.all().find(e => e.id == id),
    allWithExtras: () => model.all().map(e => Object.assign(e, {...e, img: e.img.map(img => imgModel.one(img))}))
}
module.exports = model