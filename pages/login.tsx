import { BackBtn } from "@/components/buttons";
import Styles from "@/data/styles";
import Link from "next/link";

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
            className={`${Styles.inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`${Styles.inputStyle} bg-gray-100 dark:bg-[#5555]`}
          />
          <input
            type="submit"
            value={"Login"}
            className={`${Styles.inputStyle} ${Styles.buttonStyle}`}
          />
          <Link href="#" className="text-[12px] text-right font-black w-full">
            Forgot your password ?
          </Link>

          <span className="text-[12px] mt-4 mb-6">or</span>

          <Link href="/register" type="submit" className={`${Styles.inputStyle} ${Styles.buttonStyle}`}>
            Create an account
          </Link>
        </form>
      </div>
    </>
  );
}
