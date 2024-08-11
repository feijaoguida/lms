import { getCourses, getUserProgres } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const dataCoursesPromise = getCourses();
  const userProgressPromise = getUserProgres();

  const [dataCourses, userProgress] = await Promise.all([
    dataCoursesPromise,
    userProgressPromise,
  ]);

  return (
    <div className="h-full max-w-[912px] mx-auto px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      <List
        courses={dataCourses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
};

export default CoursesPage;
