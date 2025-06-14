const cors = require('cors')
const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
    origin :function (origin,callback){
        if (!origin || allowedOrigins.includes(origin)){
                callback(null, true)
        }
        else {
            callback(new Error("Not allowed Cors"));
            
        }
    }
}
module.exports = cors(corsOptions)