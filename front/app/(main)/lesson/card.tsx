import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc?: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: Props) => {
  return (
    <>
      <div
        onClick={() => {}}
        className={cn(
          "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
          selected &&
            "border-primaryCobalt-300 bg-primaryCobalt-100 hover:bg-primaryCobalt-100",
          selected &&
            status === "correct" &&
            "border-green-300 bg-green-100 hover:bg-green-100",
          selected &&
            status === "wrong" &&
            "border-rose-300 bg-rose-100 hover:bg-rose-100",
          disabled && "pointer-events-none hover:bg-white",
          type === "ASSIST" && "lg:p-3 w-full"
        )}
      >
        {imageSrc && (
          <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
            <Image src={imageSrc} alt={text} fill />
          </div>
        )}
        {text}
      </div>
    </>
  );
};
