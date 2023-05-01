import { BackBtn, Loader, ThemeChangerBtn } from "@/components";
import { UserContext } from "@/contexts";
import { User } from "@/libs";
import { useIdentify } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";

const inputStyle: String = "w-full my-2 rounded-lg p-2";
const buttonStyle: String =
  "bg-blue-600 dark:bg-violet-800 text-white dark:text-white cursor-pointer hover:opacity-60";

export default function Login() {
  const {
    isLoading,
    setIsLoading,
    setSessionSet,
    sessionSet,
    setCurrentUser,
  }: any = useContext(UserContext);
  const router = useRouter();

  // input state elements
  const [email, setEmail] = useState<string>("");
  const [emaileError, setEmaileError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordeError, setPasswordeError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Input error function
  const handleError = (value: boolean) => {
    if (value === true) return "border-red-500 border";
  };

  // onchange function with error reset...
  function handleChange(e: any, setItem: any) {
    setEmaileError(false);
    setPasswordeError(false);
    setError("");
    setItem(e.target.value);
  }

  // auth login
  useEffect(() => {
    if (sessionSet) router.push("/");
  }, [sessionSet]);

  // register function
  const sendLogin = async (e: any) => {
    e.preventDefault();

    // Inputs verification
    if (email === "" || email == null || !isEmail(email))
      return setEmaileError(true);
    if (password === "" || password == null) return setPasswordeError(true);

    // *****************************************************************
    setIsLoading(true);
    const user: User = { fullname: null, email, password };

    const res: any = await useIdentify(user, "login");
    setIsLoading(false);

    if (res.success === false) {
      return setError(
        res.data?.message || "Please try again, or reload the page."
      );
    } else {
      setCurrentUser(res.data?.user);
      localStorage.setItem("token", res.data?.token);
      setSessionSet(true);
      router.push("/");
      setIsLoading(false);
    }
  };
  if (!isLoading)
    return (
      <>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <form
            className="w-[450px] h-auto text-center flex flex-col items-center p-4 justify-center rounded-2xl bg-gray-300 dark:bg-[#222]"
            onSubmit={sendLogin}
          >
            <BackBtn className={"self-start"} />
            <ThemeChangerBtn className={"self-end"} />
            <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
            <h3 className="w-full mb-6 opacity-80">
              Welcome, enter your credentials
            </h3>

            <input
              type="email"
              placeholder="Email"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                emaileError
              )}`}
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
            />
            <input
              type="password"
              placeholder="Password"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                passwordeError
              )}`}
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />

            <Link href="#" className="text-[12px] text-right font-black w-full">
              Forgot your password ?
            </Link>

            {error !== "" && (
              <div
                className={`flex flex-row w-full text-red-600 px-2 my-2 items-center gap-4 relative cursor-pointer`}
              >
                {error}
              </div>
            )}

            <input
              type="submit"
              value={isLoading ? "Loading..." : "Login"}
              className={`${inputStyle} ${buttonStyle}`}
            />

            <span className="text-[12px] mt-4 mb-6">or</span>

            <Link
              href="/register"
              type="submit"
              className={`${inputStyle} ${buttonStyle}`}
            >
              Create an account
            </Link>
          </form>
        </div>
      </>
    );
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
}
