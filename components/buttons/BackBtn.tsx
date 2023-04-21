import { useRouter } from "next/router";
import { FC, MouseEventHandler } from "react";

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
        className={`${className} opacity-40 -mb-6 cursor-pointer`}
      >
        back
      </span>
    </>
  );
}
