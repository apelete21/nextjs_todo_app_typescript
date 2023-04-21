import { buttonStyle, inputStyle } from "@/data/styles";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[450px] h-auto bg text-center flex flex-col items-center p-4 justify-center rounded-2xl">
          <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
          <h3 className="w-full mb-6 opacity-80">
            Welcome, select your action
          </h3>
          <div className="flex flex-row w-full items-center gap-2">
            <Link href="/login" className={`${inputStyle} ${buttonStyle}`}>
              Login
            </Link>
            {/* <span className="text-[12px] mx-2">or</span> */}
            <Link href="/register" className={`${inputStyle} ${buttonStyle}`}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
