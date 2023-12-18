const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    userName: "user1",
    password: "password1",
  },
  {
    id: 2,
    userName: "user2",
    password: "password2",
  },
];

const secret = "mysecretkey";

app.post("/api/login", (req, res) => {
  const { userName, password } = req.body;

  const user = users.find(
    (u) => u.userName === userName && u.password === password
  );

  if (user) {
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });
    res.json({ isSucceed: true, token });
  } else {
    res.json({ isSucceed: false, message: "Invalid username or password" });
  }
});

app.get("/api/drill-holes", (req, res) => {
  let resData = {
    area: data.area,
    mapCenter: data.mapCenter,
    activities: data.totalActivities,
    allPrograms: [
      data.programMaker("2015 program"),
      data.programMaker("2016 program"),
      data.programMaker("2017 program"),
    ],
  };

  res.json(resData);
});

app.get("/api/dashboard/map", (req, res) => {
  let resData = data.dashboardMapDataMaker();
  res.json(resData);
});

app.listen(2000, () => {
  console.log("Server started on port 2000");
});
