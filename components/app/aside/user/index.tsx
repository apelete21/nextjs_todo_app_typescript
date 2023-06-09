import { ThemeContext, UserContext } from "@/contexts";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import { ThemeChangerBtn } from "@/components/themeChangerBtn";
import Link from "next/link";

type Props = {};

const asideUserBtn: string =
  "bg-blue-600 dark:bg-violet-800 text-white hover:opacity-50 p-2 rounded-lg";

export function User({}: Props) {
  const router = useRouter();
  const { currentUser }: any = useContext(UserContext);
  const { toggleTheme }: any = useContext(ThemeContext);

  const Logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    router.reload();
  };

  return (
    <>
      <div className="w-full h-fit flex-1 px-2 py-1 border-t-4 border-[#2222] dark:border-[#fff2]">
        <div className="flex flex-row justify-between items-center py-2">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[30px] h-[30px] bg-none rounded-full flex items-center justify-center text-center">
              <UserCircleIcon />
            </div>
            <div>
              {currentUser &&
                currentUser.fullname
                  ?.toLocaleString()
                  .toUpperCase()
                  .split(" ")[0]}
            </div>
          </div>
          {/* <div className="flex flex-row gap-2"> */}
            <ThemeChangerBtn className={`mb-0`} />
          {/* </div> */}
        </div>
        <div className="w-full py-2 flex gap-2">
          <button className={`${asideUserBtn} w-full`} onClick={Logout}>
            Logout
          </button>
          <Link href={"/profile"} className={`${asideUserBtn} text-center w-full`}>Profile</Link>
        </div>
      </div>
    </>
  );
}
