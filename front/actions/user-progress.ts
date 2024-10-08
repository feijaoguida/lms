"use server";

import db from "@/db/drizzle";
import { getCoursesById, getUserProgres } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Usuário não Autorizado");
  }

  const course = await getCoursesById(courseId);

  if (!course) {
    throw new Error("Curso não encontrado");
  }

  // TODO: Enable once units and leassons are added
  // if (!course.units.length || !course.units[0].lessons.length) {
  //   throw new Error("Curso não encontrado")
  // }

  const existingUserProgress = await getUserProgres();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot_green.png",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot_green.png",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};
