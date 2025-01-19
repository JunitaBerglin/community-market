import { drizzle } from "drizzle-orm/libsql";

const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL!,
    // authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});

async function test() {
  const result = await db.execute("select 1");
}
