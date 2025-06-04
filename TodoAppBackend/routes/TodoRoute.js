const express = require("express");
const router = express.Router();

const {CreateTodo} = require("../controllers/CreateTodo");
const {GetTodo, GetTodoById} = require("../controllers/GetTodo");
const {UpdateTodo} = require("../controllers/UpdateTodo");
const {DeleteTodo} = require("../controllers/DeleteTodo");

router.post("/CreateTodo",CreateTodo);
router.get("/GetTodo",GetTodo);
router.get("/GetTodo/:id",GetTodoById);
router.put("/UpdateTodo/:id",UpdateTodo);
router.delete("/DeleteTodo/:id",DeleteTodo);

module.exports = router;