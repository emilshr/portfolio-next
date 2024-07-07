import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userSchema = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  githubId: int("github_id").notNull().unique(),
  username: text("username").notNull(),
});

export type UserAttributes = typeof userSchema.$inferSelect;
