import express from 'express';
import { createSchool, listSchool } from '../controllers/SchoolContoller.js';

const router = express.Router();
router.route('/addSchool').post(createSchool)
router.route('/listSchool').get(listSchool)

export default router;