import { BackBtn } from "@/components/buttons";
import Link from "next/link";

const inputStyle: String = "w-full my-2 rounded-lg p-2";
const buttonStyle: String =
  "bg-blue-600 dark:bg-violet-800 text-white dark:text-white cursor-pointer hover:opacity-60";

export default function Login() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <form className="w-[450px] h-auto text-center flex flex-col items-center p-4 justify-center rounded-2xl bg-gray-300 dark:bg-[#222]">
          <BackBtn className={"self-start"} />
          <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
          <h3 className="w-full mb-6 opacity-80">
            Welcome, enter your credentials
          </h3>

          <input
            type="email"
            placeholder="Email"
            className={`${inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`${inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
          <input
            type="submit"
            value={"Login"}
            className={`${inputStyle} ${buttonStyle}`}
          />
          <Link href="#" className="text-[12px] text-right font-black w-full">
            Forgot your password ?
          </Link>

          <span className="text-[12px] mt-4 mb-6">or</span>

          <Link href="/register" type="submit" className={`${inputStyle} ${buttonStyle}`}>
            Create an account
          </Link>
        </form>
      </div>
    </>
  );
}
