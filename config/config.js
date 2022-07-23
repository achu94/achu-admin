require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    COOKIE_SALT_ROUNDS: process.env.COOKIE_SALT_ROUNDS,
};

module.exports = config;