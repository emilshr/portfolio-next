import { drizzle } from "drizzle-orm/libsql";
import { sessionSchema } from "./session";
import { userSchema } from "./user";
import { createClient } from "@libsql/client";

const sqliteDB = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken:
    process.env.NODE_ENV !== "development"
      ? process.env.TURSO_AUTH_TOKEN
      : undefined,
});

export const db = drizzle(sqliteDB, {
  logger: true,
  schema: { sessionSchema, userSchema },
});
