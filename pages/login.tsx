import Link from "next/link";

const inputStyle = "w-full my-2 rounded-lg p-2";
const buttonStyle =
  "dark:bg-violet-800 bg-blue-600 dark:text-white text-white cursor-pointer hover:opacity-60";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[450px] h-auto bg text-center flex flex-col items-center p-4 justify-center rounded-2xl bg-gray-300 dark:bg-[#333]">
          <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
          <h3 className="w-full mb-6 opacity-80">
            Welcome, enter your credentials
          </h3>

          <input
            type="email"
            placeholder="Email"
            className={`${inputStyle}  bg-gray-100 dark:bg-[#5555]`}
          />
          <input
            type="password"
            placeholder="Password"
            className={`${inputStyle}  bg-gray-100 dark:bg-[#5555]`}
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

          <input
            type="submit"
            value={"Create an account"}
            className={`${inputStyle} ${buttonStyle}`}
          />
        </div>
      </div>
    </>
  );
}
