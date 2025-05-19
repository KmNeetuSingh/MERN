const express = require("express");
const TodoModel = require('../models/mode.todo.js')// ✅ match filename
const todorouter = express.Router();

todorouter.post("/add", async (req, res) => {
  const todo = req.body;

  try {
    const newTodo = await TodoModel.create(todo); // ✅ create() now works
    res.status(201).json({ message: "Todo added", todo: newTodo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = todorouter;
