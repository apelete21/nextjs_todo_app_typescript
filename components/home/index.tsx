import Link from "next/link";

const inputStyle: String = "w-full my-2 rounded-lg p-2";
const buttonStyle: String =
  "bg-blue-600 dark:bg-violet-800 text-white dark:text-white cursor-pointer hover:opacity-60";

export function Welcome(): JSX.Element {
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
            <Link href="/register" className={`${inputStyle} ${buttonStyle}`}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
