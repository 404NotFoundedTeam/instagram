import { signInAxios, signUpAxios } from "../../api";

export const signUpAction = async (registerData) => {
  console.log("signUpAction");
  let data = await signUpAxios(registerData);

  console.log(data, "respons");
};
export const signInAction = (registerData) => {
  console.log("signInActions");
  let data = signInAxios(registerData);
};
