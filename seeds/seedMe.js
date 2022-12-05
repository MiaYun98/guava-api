const sequelize = require('../config/connection');
const {User, Profile, Shrubs} = require("../models")
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
            UserId: 1
        },
        {
            money:10,
            days:4,
            UserId: 2
        },
        {
            money:10,
            days:10,
            UserId: 3
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
    try{

        await User.bulkCreate(users,{
            individualHooks:true
        })
        await Profile.bulkCreate(profile)
        await Shrubs.bulkCreate(shrubs)
    }catch(err){
        throw err
    }
    process.exit(0);
}
seedMe()