const User = require("./User");
const Profile = require('./Profile');
const Shrub = require("./Shrub");
const Item = require("./Item");
const ShrubTag = require("./ShrubTag");
const ProfileTag = require("./ProfileTag");

User.hasOne(Profile, {
    onDelete: 'CASCADE'
})

Profile.belongsTo(User, {
    onDelete: 'CASCADE'
})

Profile.hasOne(Shrub)

Shrub.belongsTo(Profile)

Shrub.belongsToMany(Item, {
    through: ShrubTag,
    foreignKey: "ShrubId",
})

Item.belongsToMany(Shrub, {
    through: ShrubTag,
    foreignKey: "ItemId",
})

Profile.belongsToMany(Item, {
    through: ProfileTag,
    foreignKey: "ProfileId",
})

Item.belongsToMany(Profile, {
    through: ProfileTag,
    foreignKey: "ItemId",
})

module.exports = {
    User,
    Profile,
    Shrub,
    Item,
    ShrubTag,
    ProfileTag
}