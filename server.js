const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "User added successfully" });
});
app.put("/users/:index", (req, res) => {
    const index = req.params.index;
  
    if (!users[index]) {
      return res.status(404).json({ message: "User not found" });
    }
  
    users[index] = req.body;
    res.json({ message: "User updated successfully" });
  });
app.delete("/users/:index", (req, res) => {
    const index = req.params.index;
  
    if (!users[index]) {
      return res.status(404).json({ message: "User not found" });
    }
  
    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
  });
app.listen(3000, () => {
  console.log("Server running on port 3000");
});