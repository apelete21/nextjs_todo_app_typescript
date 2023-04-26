import validator from "validator";

export const validPwd: Function = async (password: string) => {
  const response: any = validator.isStrongPassword(password, {
    minSymbols: 0,
    minLength: 5,
    minUppercase: 0,
    minNumbers: 1,
  });
  return response;
};

export const validEmail: Function = async (email: string) => {
  const response: any = validator.isEmail(email);
  return response;
};
