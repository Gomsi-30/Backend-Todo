import express from 'express';
import dotenv from 'dotenv';
import createSchoolRoute from './routes/SchoolRoute.js'
import { connect } from './utils/database.js';
import { checkSchema } from 'express-validator';
import { schoolSchema } from './schema/schoolSchema.js';

const app = express()
dotenv.config()
connect()
app.use(express.json());

app.use('/',checkSchema(schoolSchema),createSchoolRoute);

app.listen(process.env.PORT,()=>{
    console.log('listening on port ' + process.env.PORT)
})