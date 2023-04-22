import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

type Props = {
  className: String;
};

export function BackBtn({ className }: Props) {
  const router = useRouter();
  const BackLink: MouseEventHandler = (): void => {
    router.back();
  };
  return (
    <>
      <span
        onClick={BackLink}
        className={`${className} text-[15px] opacity-40 -mb-6 cursor-pointer`}
      >
        Back
      </span>
    </>
  );
}
