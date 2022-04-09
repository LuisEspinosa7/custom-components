import { rest } from "msw";
import { mockDataUsers } from "./mock-data/datatable.mock";


const usersHandler = rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
    console.log('Intercepted in a network level');
    return res(ctx.json(mockDataUsers))
});

export const usersHandlerException = rest.get(
  'https://jsonplaceholder.typicode.com/users',
  async (req, res, ctx) =>
    res(ctx.status(400), ctx.json({ message: "Deliberately broken request" }))
);

export const handlers = [usersHandler];
