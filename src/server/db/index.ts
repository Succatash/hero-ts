import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql, logger: true });

const result = await db.execute("select 1");
console.log(result);
