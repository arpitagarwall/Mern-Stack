const Todo = require("../models/Todo");

exports.DeleteTodo = async(req,res) => {
    try{
        const id = req.params.id;

        await Todo.findByIdAndDelete(id)

         res.status(200).json({
                success:true,
                message:'Deleted Successfully'
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