import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { userSchema } from "./user";

export const sessionSchema = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userSchema.id),
  expiresAt: integer("expires_at").notNull(),
});

export type SessionAttributes = typeof sessionSchema.$inferSelect;
