const Todo = require("../models/Todo"); 

exports.GetTodo = async(req,res) => {
    try{
       const todos = await Todo.find({});

       res.status(200).json({
            success:true,
            data:todos,
            message:'Entire todo data is fetched'
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
             success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}

exports.GetTodoById = async(req,res) => {
    try{
        
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
             res.status(404).json({
                success:false,
                message:'No data found with id'
            })
        }

        res.status(200).json({
                success:true,
                data:todo,
                message:'Todo data succefully fetched'
            })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
             success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}