import express from 'express';
import { createSchool, listSchool } from '../controllers/SchoolContoller.mjs';

const router = express.Router();
router.get('/',(req,res)=>{
    res.send({msg:'School Mangement website',routes:'/addSchool and /listSchool'})
})
router.route('/addSchool').post(createSchool)
router.route('/listSchool').get(listSchool)

export default router