import express from 'express';

import {expressConfig} from './config/server-config';
import {PORT} from './constants/server-constants';

const app = express();
const router = new express.Router();

// configure app to use bodyParser()
expressConfig(app);

// test route
router.get('/', (req, res) => {
  res.json({message: 'hello world'});
});

// register all routes
app.use('/api', router);

// start server
app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});
