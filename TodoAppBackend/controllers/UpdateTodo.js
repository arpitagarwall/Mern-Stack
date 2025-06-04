const Todo = require("../models/Todo");

exports.UpdateTodo = async(req,res) => {
    try{
        const id = req.params.id;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt:Date.now()},

        )

         res.status(200).json({
                success:true,
                data:todo,
                message:'Updated Successfully'
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