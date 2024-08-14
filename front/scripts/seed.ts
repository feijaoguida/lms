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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Nouns",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Verbs",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Nouns",
        order: 5,
      },
      {
        id: 6,
        unitId: 1,
        title: "Verbs",
        order: 6,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "Whick one of these is the 'the man'?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    console.log("Seeding done!!!");
  } catch (error) {
    console.error("error Seeding", error);
    throw new Error("Failed to seed the database");
  }
};

main();
