const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin%401234@cluster0.82mjkhz.mongodb.net/blog")

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true}
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;