import { Hono } from "hono";

import type { ExportedHandler } from "@cloudflare/workers-types";

import type { Env } from "~/types";

const app = new Hono<Env>();

export default {
  fetch: app.fetch,
} satisfies ExportedHandler<Env>;
