import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database...");

    console.log("Deleting old seed data...");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    console.log("Inserting new seed data...");
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/flag_es.svg",
      },
      {
        id: 2,
        title: "English",
        imageSrc: "/flag_us.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/flag_fr.svg",
      },
      {
        id: 4,
        title: "Brasilian",
        imageSrc: "/flag_br.svg",
      },
      {
        id: 5,
        title: "Croatian",
        imageSrc: "/flag_hr.svg",
      },
    ]);

    console.log("Seeding done!!!");
  } catch (error) {
    console.error("error Seeding", error);
    throw new Error("Failed to seed the database");
  }
};

main();
