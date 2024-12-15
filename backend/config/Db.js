const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL

const dbConnection = async()=>{

    await mongoose.connect(DATABASE_URL,{}).then((data)=>{

        console.log('Database connected successfully');

    }).catch((error)=>{

        console.log('Database connection failed', error);

    })

}

module.exports = dbConnection;

