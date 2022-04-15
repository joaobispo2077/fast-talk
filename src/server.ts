import 'reflect-metadata';
import { APP_PORT } from './configs';
import { server } from './http';
import './websockets';

server.listen(APP_PORT, () =>
  console.log(`Server is running on port ${APP_PORT}`),
);
