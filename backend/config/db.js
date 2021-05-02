const mongoose = require("mongoose");

const databaseConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true
        });

        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch(error) {
        console.error(error);
    }
};

module.exports = databaseConnect;