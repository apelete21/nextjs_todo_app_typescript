import { BackBtn, Loader, ThemeChangerBtn, Welcome } from "@/components";
import { UserContext } from "@/contexts";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import moment from "moment";
import Link from "next/link";
import React, { useContext } from "react";

export default function profile() {
  const {
    isLoading,
    sessionSet,
    currentUser,
  }: any = useContext(UserContext);

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (!sessionSet)
    return (
      <>
        <Welcome />
      </>
    );
  else
    return (
      <>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <div className="max-w-xl w-10/12 flex flex-col gap-4 p-4 my-[20px] bg-slate-400 dark:bg-stone-900 bg-opacity-10 rounded-lg items-center">
            <div className="mb-8 w-full flex flex-col pt-1 items-center justify-between">
              <BackBtn className={"self-start"} />
              <ThemeChangerBtn className={"self-end"} />
            </div>
            {currentUser && (
              <>
                <div className="w-full flex flex-wrap flex-row items-center justify-between">
                  <div className="flex items-center justify-center">
                    <UserCircleIcon width={100} />
                  </div>
                  <div className="">
                    <button className="bg-blue-600 dark:bg-violet-600 hover:opacity-60 rounded-lg text-white p-2">
                      Change profile
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-wrap flex-row items-center justify-between">
                  <div>
                    <p className="font-semibold">Full Name</p>
                    <p className="opacity-50 text-xs mt-1">
                      {currentUser?.fullname}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Member till</p>
                    <p className="opacity-50 text-xs mt-1">
                      {moment(currentUser?.createdAt).format("LLLL")}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap flex-row items-center justify-between">
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-50 text-xs mt-1">
                      {currentUser?.email}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={"/password"}
                      className="bg-blue-600 dark:bg-violet-600 hover:opacity-60 rounded-lg text-white py-1 px-2 text-xs mt-1"
                    >
                      Change password
                    </Link>
                  </div>
                </div>
                <div className="w-full flex flex-wrap flex-row items-center justify-between">
                  <div>
                    <p className="font-semibold">Last password update</p>
                    <p className="opacity-50 text-xs mt-1">
                      {moment(currentUser?.updatedAt).format("LLLL")}
                    </p>
                  </div>
                  <div>
                    {currentUser?.role === "ADMIN" && (
                      <Link
                        title="Dashboard"
                        href={"/dashboard"}
                        className="underline"
                      >
                        View Dashboard
                      </Link>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
}
