import express from 'express';
import dotenv from 'dotenv';
import createSchoolRoute from './routes/SchoolRoute.mjs'
import { connect } from './utils/database.mjs';
import { checkSchema } from 'express-validator';
import { schoolSchema } from './schema/schoolSchema.mjs';

const app = express()
dotenv.config()
connect()
app.use(express.json());

app.use('/',checkSchema(schoolSchema),createSchoolRoute);

app.listen(process.env.PORT,()=>{
    console.log('listening on port ' + process.env.PORT)
})

export default app;