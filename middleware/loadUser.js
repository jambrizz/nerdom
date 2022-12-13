const loadUser = (req, res, next) => {
    console.log("loading a user...")
    next();
}

module.exports = loadUser;