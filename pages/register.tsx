import { BackBtn } from "@/components";
import Link from "next/link";

const inputStyle: String = "w-full my-2 rounded-lg p-2";
const buttonStyle: String =
  "bg-blue-600 dark:bg-violet-800 text-white dark:text-white cursor-pointer hover:opacity-60";

type Props = {};

export default function Register({}: Props): JSX.Element {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <form className="w-[450px] h-auto bg text-center flex flex-col items-center p-4 justify-center rounded-2xl bg-gray-300 dark:bg-[#222]">
          <BackBtn className={"self-start"} />
          <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
          <h3 className="w-full mb-6 opacity-80">
            Welcome, enter your informations
          </h3>

          <input
            type="text"
            placeholder="Full name"
            className={`${inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
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
            type="password"
            placeholder="Retype password"
            className={`${inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
          <fieldset className="flex flex-row w-full px-2 my-2 items-center gap-4 relative">
            <input type="checkbox" className="" />
            <label htmlFor="checkbox" className="text-[15px]">
              I accept terms of confidentiality & politics
            </label>
          </fieldset>

          <input
            type="submit"
            value={"Create an account"}
            className={`${inputStyle} ${buttonStyle}`}
          />

          <span className="text-[12px] my-3">or</span>

          <Link href="/login" className={`${inputStyle} ${buttonStyle}`}>
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
