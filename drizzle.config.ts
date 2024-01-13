import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  out: '"./src/db/migrations',
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: env.DATABASE_URL,
  },
  tablesFilter: ["zhess_*"],
  breakpoints: true,
} satisfies Config;
