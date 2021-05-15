const mongoose = require("mongoose");
const chalk = require("chalk");

function connectDB() {
    var url = process.env.MONGO_URL;
    if (process.env.DB_MODE === "local" || url === "" || !url) {
        url = "mongodb://localhost:27017/NitsResultPortal";
        console.info(
            chalk.bgWhite.black(
                "Attempting to connect to Local Mongodb at PORT 27017"
            )
        );
    }
    mongoose.connect(
        url,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(chalk.bgRed("Error"));
                console.error(err);
            } else console.info(chalk.green("Database Connected!"));
        }
    );
}

module.exports = connectDB;
