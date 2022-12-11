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
            money:250,
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
            hunger: 80,
            hygiene: 40,
            happiness: 80,
            energy: 100,
            ProfileId: 1
        },
        {
            name:"snack",
            level:1,
            hunger: 80,
            hygiene: 40,
            happiness: 80,
            energy: 100,
            ProfileId: 2
        },
        {
            name:"lock",
            level:1,
            hunger: 80,
            hygiene: 40,
            happiness: 80,
            energy: 100,
            ProfileId: 3
        },
    ]
    const items = [
        {
            name:"blash",
            type:"mouth",
            stats: 3,
        },
        {
            name:"darkcircle",
            type:"eye",
            stats: 3,
        },
        {
            name:"earing",
            type:"head",
            stats: 3,
        },
        {
            name:"eyelash",
            type:"eye",
            stats: 3,
        },
        {
            name:"frakle",
            type:"mouth",
            stats: 3,
        },
        {
            name:"glass",
            type:"eye",
            stats: 3,
        },
        {
            name:"harrypotter",
            type:"head",
            stats: 3,
        },
        {
            name:"monocle",
            type:"eye",
            stats: 3,
        },
        {
            name:"mountainhat",
            type:"head",
            stats: 3,
        },
        {
            name:"lips",
            type:"mouth",
            stats: 3,
        },
        {
            name:"mush",
            type:"mouth",
            stats: 3,
        },
        {
            name:"nose",
            type:"eye",
            stats: 3,
        },
        {
            name:"mouth",
            type:"mouth",
            stats: 3,
        },
        {
            name:"ribbon",
            type:"head",
            stats: 3,
        },
        {
            name:"scar",
            type:"mouth",
            stats: 3,
        },
        {
            name:"shineyeyes",
            type:"eye",
            stats: 3,
        },
        {
            name:"star",
            type:"head",
            stats: 3,
        },
        {
            name:"toung",
            type:"mouth",
            stats: 3,
        },
        {
            name:"witchhat",
            type:"mouth",
            stats: 3,
        },
        {
            name:"default",
            type:"all",
            stats: 0,
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