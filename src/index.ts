import { Hono } from "hono";

import type { ExportedHandler } from "@cloudflare/workers-types";

import type { Env } from "~/types";

const app = new Hono<Env>().get("/", (c) => c.text("Hello World"));

export default {
  fetch: app.fetch,
} satisfies ExportedHandler<Env>;
