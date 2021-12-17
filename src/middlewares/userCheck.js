const USER_ROL = "USER_ADMIN";

function userAdminCheck(req, res, next) {
    if(USER_ROL === "USER_ADMIN") {
        next()
    } else {
        res.send("Raja de acá")
    }
};

module.exports = userAdminCheck;
