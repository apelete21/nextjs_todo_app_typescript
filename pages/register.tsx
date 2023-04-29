import { BackBtn, Loader } from "@/components";
import { useIdentify } from "@/utils";
import { User } from "@/libs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import { UserContext } from "@/contexts";
import { useRouter } from "next/router";

const inputStyle: String = "w-full my-2 rounded-lg p-2";
const buttonStyle: String =
  "bg-blue-600 dark:bg-violet-800 text-white dark:text-white cursor-pointer hover:opacity-60";

type Props = {};

export default function Register({}: Props) {
  const {
    isLoading,
    sessionSet,
    currentUser,
    setIsLoading,
    setSessionSet,
    setCurrentUser,
  }: any = useContext(UserContext);
  const router = useRouter();

  // input state elements
  const [fullname, setFullname] = useState<string>("");
  const [fullnameError, setFullnameError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emaileError, setEmaileError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordeError, setPasswordeError] = useState<boolean>(false);
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [passwordAgaineError, setPasswordAgaineError] =
    useState<boolean>(false);
  const [agrement, setAgrement] = useState<boolean>(false);
  const [agrementeError, setAgrementeError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Input error function
  const handleError = (value: boolean) => {
    if (value === true) return "border-red-500 border";
  };

  // auth login
  useEffect(() => {
    if (sessionSet) router.push("/");
  }, [sessionSet]);

  // onchange function with error reset...
  function handleChange(e: any, setItem: any) {
    setFullnameError(false);
    setEmaileError(false);
    setPasswordeError(false);
    setPasswordAgaineError(false);
    setAgrementeError(false);
    setError("");

    if (setItem === setAgrement) {
      setItem(!agrement);
    } else {
      setItem(e.target.value);
    }
  }

  // register function
  const sendRegistration = async (e: any) => {
    e.preventDefault();

    // Inputs verification
    if (fullname === "" || fullname == null) return setFullnameError(true);
    if (email === "" || email == null || !isEmail(email))
      return setEmaileError(true);
    if (password === "" || password == null) return setPasswordeError(true);
    if (passwordAgain === "" || passwordAgain == null)
      return setPasswordAgaineError(true);
    if (password !== passwordAgain) {
      setPasswordeError(true);
      setPasswordAgaineError(true);
      return;
    }
    if (agrement === false || agrement === null) return setAgrementeError(true);

    // *****************************************************************
    setIsLoading(true);
    const user: User = { fullname, email, password };

    const res = await useIdentify(user, "register");
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
      <div>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <form
            className="w-[450px] h-auto bg text-center flex flex-col items-center p-4 justify-center rounded-2xl bg-gray-300 dark:bg-[#222]"
            onSubmit={sendRegistration}
          >
            <BackBtn className={"self-start"} />
            <h1 className="w-full text-4xl font-bold my-[20px]">Todo App</h1>
            <h3 className="w-full mb-6 opacity-80">
              Welcome, enter your informations
            </h3>

            <input
              type="text"
              placeholder="John Doe"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                fullnameError
              )}`}
              value={fullname}
              onChange={(e) => handleChange(e, setFullname)}
            />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                emaileError
              )}`}
              value={email}
              onChange={(e) => handleChange(e, setEmail)}
            />
            <input
              type="password"
              placeholder="**********"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                passwordeError
              )}`}
              value={password}
              onChange={(e) => handleChange(e, setPassword)}
            />
            <input
              type="password"
              placeholder="**********"
              className={`${inputStyle} bg-gray-100 dark:bg-[#5555] ${handleError(
                passwordAgaineError
              )}`}
              value={passwordAgain}
              onChange={(e) => handleChange(e, setPasswordAgain)}
            />
            <label
              className={`flex flex-row w-full px-2 my-2 items-center gap-4 relative cursor-pointer ${handleError(
                agrementeError
              )}`}
            >
              <input
                type="checkbox"
                checked={agrement}
                onChange={(e) => handleChange(e, setAgrement)}
              />
              I accept terms of confidentiality & politics
            </label>
            {error !== "" && (
              <div
                className={`flex flex-row w-full text-red-600 px-2 my-2 items-center gap-4 relative cursor-pointer`}
              >
                {error}
              </div>
            )}

            <input
              type="submit"
              value={isLoading ? "Loading..." : "Create an account"}
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
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
}
