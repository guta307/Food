import axios from "axios";
type loginUserProps = {
  email: string;
  passwordHash: string;
};

export const loginUser = async ({ email, passwordHash }: loginUserProps) => {
  try {
    const apiUrl = process.env.API_URL;
    console.log(apiUrl);
    const response = await axios.post(`${apiUrl}/user/login`, {
      email,
      passwordHash,
    });
    return { status: true, response };
  } catch (error) {
    return { status: false, error };
  }
};
