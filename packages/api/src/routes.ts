import { Hono } from 'hono';

import { greet } from './services/greet';
import { randomNumber } from './services/random-number';

const routes = new Hono();

routes.get('/random-number', (c) => {
  return c.json({ number: randomNumber() });
});

routes.post('/greet', async (c) => {
  const body = await c.req.json();
  return c.json({ msg: greet(body.name) });
});

export default routes;
