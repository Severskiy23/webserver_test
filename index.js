const dotenv = require("dotenv");
dotenv.config();
const db = require('./db.js')
const sequelize = db.sequelize
const createServer = require('./server.js')

const PORT = process.env.PORT_API || 8001
const app = createServer()
async function start(){
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()

