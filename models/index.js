const User = require('./User');
const Profile = require('./Profile');
const Shrubs = require('./Shrubs');
const Items = require('./Items');

User.hasOne(Profile, {
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    onDelete: 'CASCADE'
});

Profile.hasOne(Shrubs, {
    onDelete: 'CASCADE'
});

Shrubs.belongsTo(Profile, {
    onDelete: 'CASCADE'
});

Profile.hasMany(Items, {
    onDelete: 'CASCADE'
});

Items.belongsToMany(Profile, {
    onDelete: 'CASCADE'
})

module.exports = { User, Profile, Shrubs, Items}