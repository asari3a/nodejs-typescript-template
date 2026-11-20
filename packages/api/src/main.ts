import { Hono } from 'hono';

export const app = new Hono();

app.get('/hello', async (c) => {
  return c.json({ msg: 'Hello World' });
});
