const path = require("path");
const express = require("express");
const method = require("method-override")
const app = express();

app.set("port", process.env.PORT || 3300);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.listen(app.get("port"), () => console.log("Server Start"));

// Public Access
app.use(express.static(path.resolve(__dirname, "../public")));

// App Middleawes
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.use(method("_method"));

// app.use(require("./middlewares/styles"));

// Websites Routes Requires
const main = require("./routes/main");
app.use(main);
const user = require("./routes/user");
app.use(user);
const product = require("./routes/product");
app.use(product);