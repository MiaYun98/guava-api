const User = require("./User")
const Profile = require('./Profile')
const Shrubs = require("./Shrubs")

User.hasOne(Profile, {
    onDelete: 'CASCADE'
})

Profile.belongsTo(User, {
    onDelete: 'CASCADE'
})

Profile.hasOne(Shrubs)

Shrubs.belongsTo(Profile)

module.exports = {
    User,
    Profile,
    Shrubs,
}