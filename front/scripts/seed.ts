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

    console.log("Inserting courses data...");
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

    console.log("Inserting units data...");
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of spanish",
        order: 1,
      },
      {
        id: 2,
        courseId: 2,
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 2,
      },
    ]);

    console.log("Inserting lessons data...");
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
      {
        id: 7,
        unitId: 2,
        title: "Nouns",
        order: 7,
      },
      {
        id: 8,
        unitId: 2,
        title: "Verbs",
        order: 8,
      },
      {
        id: 9,
        unitId: 2,
        title: "Nouns",
        order: 9,
      },
      {
        id: 10,
        unitId: 2,
        title: "Verbs",
        order: 10,
      },
      {
        id: 11,
        unitId: 2,
        title: "Nouns",
        order: 11,
      },
      {
        id: 12,
        unitId: 2,
        title: "Verbs",
        order: 12,
      },
    ]);

    console.log("Inserting challenges data...");
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "Whick one of these is the 'the man'?",
        order: 1,
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        question: "'the man'",
        order: 2,
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        question: "Whick one of these is the 'the robot'?",
        order: 3,
      },
      // {
      //   id: 4,
      //   lessonId: 7,
      //   type: "SELECT",
      //   question: "Whick one of these is the 'the robot'?",
      //   order: 3,
      // },
    ]);

    console.log("Inserting challengeOptions data...");
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/man.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mujer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: true,
        text: "el robot",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    // console.log("Inserting challengeProgress data...");
    // await db.insert(schema.challengeProgress).values([
    //   {
    //     id: 1,
    //     userId: "1",
    //     challengeId: 2,
    //     completed: false,
    //   },
    // ]);

    // console.log("Inserting userProgress data...");
    // await db.insert(schema.userProgress).values([
    //   {
    //     userId: "1",
    //     userName: "Mango Joe",
    //     userImageSrc: "/mascot_green.png",
    //     activeCourseId: 2,
    //     hearts: 5,
    //     points: 30,
    //   },
    // ]);

    console.log("Seeding done!!!");
  } catch (error) {
    console.error("error Seeding", error);
    throw new Error("Failed to seed the database");
  }
};

main();
