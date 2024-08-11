import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgres } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressPromisse = getUserProgres();

  const [userProgress] = await Promise.all([userProgressPromisse]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/flag_es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>

      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
