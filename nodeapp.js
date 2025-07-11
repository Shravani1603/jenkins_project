const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like CSS)
app.use(express.static("public"));

// Main route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="container">
        <h1>🚀 Welcome to My Node.js App on AWS Elastic Beanstalk!</h1>
        <p>Hey, I am <strong>Shravani</strong>. This app is successfully deployed and running on the cloud.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
