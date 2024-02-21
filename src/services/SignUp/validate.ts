import axios from "axios";
type validateUserProps = {
  code: string;
};

export const validateUser = async ({ code }: validateUserProps) => {
  try {
    const apiUrl = process.env.API_URL;

    const response = await axios.put(`${apiUrl}/user/validate`, {
      code,
    });
    console.log(response);
    return { status: true, response };
  } catch (error) {
    return { status: false, error };
  }
};
