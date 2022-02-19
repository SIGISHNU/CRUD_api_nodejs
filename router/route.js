const express = require("express");
const router = express.Router();

const userInfo = [
  {
    name: "sigi",
    age: "22",
    place: "manjeri",
  },

  {
    name: "sri",
    age: "21",
    place: "koyilandi",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(userInfo);
});

router.post("/", (req, res) => {
  const userData = req.body;
  userInfo.push(userData);
  res.send("User added successfully");
});

router.get("/:name", (req, res) => {
  const name = req.params.name;
  //console.log(name);
  const user = userInfo.find((userInfo) => userInfo.name == name);
  res.status(200).json(user);
});

router.delete("/:name", (req, res) => {
  const userName = req.params.name;
  const deleted = userInfo.filter((user) => user.name != userName);
  res.status(200).json({
    message: `The ${userName} is deleted remaining data`,

    data: deleted,
  });
});

router.patch("/:name", (req, res) => {
  const updateUser = req.params.name;
  const { name, age, place } = req.body;
  const update = userInfo.find((user) => user.name == updateUser);
  if (name) {
    update.name = name;
    res.status(200).json({
      message: `user ${updateUser} updated as ${name}`,
    });
  }
  if (age) {
    update.age = age;
    res.status(200).json({
      message: `user ${updateUser}'s age updated as ${age}`,
    });
  }
  if (place) {
    update.place = place;
    res.status(200).json({
      message: `user ${updateUser}'s place updated as ${place}`,
    });
  }
});

module.exports = router;
