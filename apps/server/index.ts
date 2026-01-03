import { initTRPC } from '@trpc/server';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import cors from 'cors';

const t = initTRPC.create();

const appRouter = t.router({
  helloworld: t.procedure.query(() => {
    return 'Hello from tRPC!';
  }),
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use(express.static("../client/dist"));

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
  }),
);

app.all("/:all", (_, response) => {
  response.redirect("/");
})

app.listen(8000, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:8000`);
});
