const sequelize = require('../config/connection');
const {User, Profile, Shrub, Item, ShrubTag, ProfileTag} = require("../models");
const seedMe = async ()=>{
    await sequelize.sync({force:true})
    const users = [
        {
            userName:"joe",
            password:"password"
        },
        {
            userName:"shiva",
            password:"yayForCrunchies"
        },
        {
            userName:"bahamut",
            password:"chirpchirp"
        }
    ]
    const profile = [
        {
            money:10,
            days:1,
            UserId: 1,
            items:"1"
        },
        {
            money:10,
            days:4,
            UserId: 2,
            items:"1"
        },
        {
            money:10,
            days:10,
            UserId: 3,
            items:"1"
        },
    ]
    const shrubs = [
        {
            name:"cake",
            level:1,
            stats: 1,
            ProfileId: 1
        },
        {
            name:"snack",
            level:1,
            stats: 1,
            ProfileId: 2
        },
        {
            name:"lock",
            level:1,
            stats: 1,
            ProfileId: 3
        },
    ]
    const items = [
        {
            name:"cake",
            type:"food",
            stats: 1,
        },
        {
            name:"snack",
            type:"food",
            stats: 1,
        },
        {
            name:"ball",
            type:"toy",
            stats: 3,
        },
    ]
    const shrubsTag = [
        {
            ShrubId:1,
            ItemId:3,
        },
        {
            ShrubId:1,
            ItemId:2,
        },
        {
            ShrubId:3,
            ItemId:1,
        },
    ]
    const profileTag = [
        {
            ProfileId:1,
            ItemId:3,
        },
        {
            ProfileId:1,
            ItemId:2,
        },
        {
            ProfileId:3,
            ItemId:1,
        },
    ]
    try{

        await User.bulkCreate(users,{
            individualHooks:true
        })
        await Profile.bulkCreate(profile)
        await Shrub.bulkCreate(shrubs)
        await Item.bulkCreate(items)
        await ShrubTag.bulkCreate(shrubsTag)
        await ProfileTag.bulkCreate(profileTag)

    }catch(err){
        throw err
    }
    process.exit(0);
}
seedMe()