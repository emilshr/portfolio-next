import { Lucia } from "lucia";
import { adapter } from "./adapter";
import { GitHub } from "arctic";

export interface DatabaseUser {
  id: string;
  username: string;
  githubId: number;
}

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes(databaseUserAttributes) {
    return {
      githubId: databaseUserAttributes.githubId,
      username: databaseUserAttributes.username,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: Omit<DatabaseUser, "id">;
  }
}

export const github = new GitHub(
  process.env.GITHUB_CLIENT_ID,
  process.env.GITHUB_CLIENT_SECRET
);
