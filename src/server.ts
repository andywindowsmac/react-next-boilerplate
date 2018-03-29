import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as next from 'next';
import chalk from 'chalk';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: 'app', dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  // Load body parser to handle POST requests
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, err => {
    if (err) {
      console.log(chalk.red(`Error: ${err}`));
      throw err;
    }

    console.log(chalk.green(`Run on http://localhost:${PORT}`));
  });
})();
