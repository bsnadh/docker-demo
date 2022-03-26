const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Bishnu Adhikari",
    address: "Kathmandu",
  });
});

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

/**
 * to create a docker image and run a container, run these commands
 *
 * sudo docker build -t bsnadh/docker-demo .
 * sudo docker run -p 8000:3300 -d bsnadh/docker-demo
 *
 * now visit port 8000
 */
