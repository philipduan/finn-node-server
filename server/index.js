const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./mongoose");
const { User } = require("./models/user");
const app = express();

const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/id", (req, res) => {
  User.find({}, { name: 1 })
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).send(error));
});

app.get("/user/:id", (req, res) => {
  User.findById({ _id: req.params.id })
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(404).send({ message: "User not found" }));
});

app.post("/user", (req, res) => {
  const user = new User(req.body.user);
  if (Math.random() > 0.5) {
    user
      .save()
      .then((user) => res.status(200).send({ user }))
      .catch((error) => res.status(500).send(error));
  } else {
    res
      .status(500)
      .send({ message: "New user cannot be saved, please try again" });
  }
});

app.listen(port, () => console.log(`App running successfully on port ${port}`));

connectDB()
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => console.log("Connection err", err));
