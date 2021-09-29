const controller = {
    detail: (req, res) => {
        let producto = [];
        return res.render("products/detail", {producto: producto});
    }
    // <%- producto.img[0].url %>
}
module.exports = controller;