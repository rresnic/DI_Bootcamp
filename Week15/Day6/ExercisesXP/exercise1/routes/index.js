const Router = require("express");
const router = Router();

router.get("/", (req, res) => {
      const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Homepage Exercise 1</title>
    </head>
    <body>
      <h1>Welcome to my website!</h1>
      <p>This is the home page for exercise 1</p>
    </body>
    </html>
  `;
    res.send(htmlContent)
    }
);

router.get("/about", (req, res) => {
      const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About usExercise 1</title>
    </head>
    <body>
      <h1>About Us</h1>
      <p>This is an about page for Exercise 1. This is a short and simple express server using routes</p>
    </body>
    </html>
  `;
    res.send(htmlContent)
    }
);

module.exports = router;