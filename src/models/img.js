const path =  require("path");
const fs = require("fs");
const model = {
    directory: path.resolve(__dirname, "../data", "img.json"),
    all: () => JSON.parse(fs.readFileSync(model.directory)),
    one: id => model.all().find(e => e.id == id)
}
module.exports = model