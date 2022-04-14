const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let myGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${myGoal}</h3>
        </section>
        <form action="/app-goal" method="POST">
          <div class="form-control">
            <label>App Goal</label>
            <input type="text" name="goal">
          </div>
          <button>App Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/app-goal', (req, res) => {
  myGoal = req.body.goal;
  res.redirect('/');
});

app.listen(3000);
