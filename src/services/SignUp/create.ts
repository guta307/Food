import axios from "axios";
type createUserProps = {
  name: string;
  email: string;
  passwordHash: string;
};

export const createUser = async ({
  name,
  email,
  passwordHash,
}: createUserProps) => {
  try {
    const apiUrl = process.env.API_URL;

    const response = await axios.post(`${apiUrl}/user/create`, {
      name,
      email,
      passwordHash,
    });
    return { status: true, response };
  } catch (error) {
    return { status: false, error };
  }
};
