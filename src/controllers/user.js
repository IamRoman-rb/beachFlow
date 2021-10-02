const controller = {
    login: (req, res) => {
        return res.render("users/login", {
            title: "Beach Flow | Login"
        });
    },
    register: (req, res) => {
        return res.render("users/register", {
            title: "Beach Flow | SingUp"
        });
    },
    comtact: (req, res) => {
        return res.render("users/contact", {
            title: "Beach Flow | Contact"
        });
    }
}
module.exports = controller