const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello from AWS Elastic Beanstalk! This is a Node.js app by Shubham.");
});

// Health check route (optional but useful for AWS ELB health checks)
app.get("/health", (req, res) => {
  res.send("OK");
});

// Start server
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
