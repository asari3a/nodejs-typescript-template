import { Hono } from 'hono';

const app = new Hono();

app.get('/hello', async (c) => {
  return c.json({ msg: 'Hello World' });
});
