
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is requried'],
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'email is required'],
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            minlength: 6,
        },
    },
    { timestamps: true }
);

userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', userSchema);
