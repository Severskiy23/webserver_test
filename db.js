const {Sequelize} = require('sequelize')

module.exports = db = {}; 
const sequelize = new Sequelize(process.env.NAME_BD, process.env.USER_BD, process.env.PASSWORD_BD,
{
    dialect: "postgres",
    define: {
        timestamps: false
    },
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
});
db.sequelize = sequelize;
const User = require('./models/user.js')
const PaymentHistory = require('./models/paymentHistory.js')
db.User = User
db.PaymentHistory = PaymentHistory

//User 1 : N PaymentHistory
db.User.hasMany(PaymentHistory, {foreignKey: 'userId'});
db.PaymentHistory.belongsTo(User, {foreignKey: 'userId'});