import { getCourses } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const dataCourses = await getCourses();

  return (
    <div className="h-full max-w-[912px] mx-auto px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      <List courses={dataCourses} activeCourseId={dataCourses[0].id} />
    </div>
  );
};

export default CoursesPage;
