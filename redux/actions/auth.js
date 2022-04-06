import { signUpAxios } from "../../api";

export const signUpAction = async (registerData) => {
  console.log("signUpAction");
  let data = await signUpAxios(registerData);

  console.log(data, "respons");
};
