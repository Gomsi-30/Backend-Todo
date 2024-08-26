import { validationResult } from "express-validator";
import { Todo } from "../models/todoModel.mjs";
import { ApiFeature } from "../Features/ApiFeature.mjs";

const createTodo = async (req, res) => {
  try {
    const result = validationResult(req);
    console.log(result)
    if(!result.isEmpty()){
        return res.status(400).send({message:result.array()})
    }
    const newTodo = await Todo.create(req.body);
    return res.status(201).send({ success: true, message: newTodo });
  } catch (e) {
    console.error(e);
    return res.status(400).send({ success: false });
  }
};

const getTodo = async (req,res)=> {
  try {
    console.log('hello');
    const page = parseInt(req.query.page) || 1; 
    const api = new ApiFeature(Todo.find({})).pagination(page, 4);
    const todos = await api.query;
    res.json(todos); 
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

const getTodoById = async (req,res) => {
  try {
    
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

const deleteTodo = async (req, res)=> {
  try {
  
    console.log(req.params.id);
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    res.json({ msg: 'Todo deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }

}

const updateTodo = async (req, res)=> {
  console.log('id vla call')
  console.log(req.params.id);
  
  const { title, description } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true } 
    );

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

export {createTodo,getTodo,getTodoById,updateTodo,deleteTodo};