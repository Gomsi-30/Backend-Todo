import express from 'express';
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from '../controllers/todoContoller.mjs';


const router = express.Router();
router.get('/',(req,res)=>{
    res.send({msg:'School Mangement website',routes:'/addSchool and /listSchool'})
})
router.route('/add').post(createTodo)
router.route('/get').get(getTodo)
router.route('/todo/:id').get(getTodoById).put(updateTodo).delete(deleteTodo)

export default router