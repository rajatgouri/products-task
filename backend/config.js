import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: '' ,
  JWT_SECRET: 'JWTSecret' ,
  PAYPAL_CLIENT_ID: 1 ,
  accessKeyId: 'accessKey' ,
  secretAccessKey: 'secrretKey' ,
};
