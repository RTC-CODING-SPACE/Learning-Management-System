const bcrypt = require('bcrypt');

// HASHED PASSWORD
exports.hashPassword = async function (password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// COMPARE HASHED PASSWORD
exports.comparePassword = async function(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}