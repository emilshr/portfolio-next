import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";

import { sessionSchema, userSchema } from "@/schema";
import { db } from "@/schema/db";

export const adapter = new DrizzleSQLiteAdapter(db, sessionSchema, userSchema);
