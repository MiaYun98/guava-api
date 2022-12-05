const User = require('./User')
const Profile = require('./Profile')

User.hasOne(Profile, {
    onDelete: 'CASCADE'
})

Profile.belongsTo(User, {
    onDelete: 'CASCADE'
})

module.exports = { User, Profile }