var mongoose = require("mongoose")

var userSechema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        role: String,
    }
)

//mongoose.model("collections_name",schema)


mongoose.model("user", userSechema)

module.exports = mongoose.model("user")