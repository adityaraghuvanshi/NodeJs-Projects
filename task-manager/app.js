const express = require("express");
const app = express();
const PORT = require("./.env");
const tasks = require("./routes/taskRoutes");

//middleware
app.use(express.json());
//routes
app.get("/", (req, res) => {
    res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);
//app.get("/api/v1/task",(req,res)=>{
//res.send("Create Task");
//})

const port = 3000 || PORT;
app.listen(port, console.log(`Server connected on port ${port}`));
