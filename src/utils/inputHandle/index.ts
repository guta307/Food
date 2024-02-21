export const handleChange = (
  name: string,
  value: string,
  setFormValues: React.Dispatch<React.SetStateAction<any>>,
  setErrors: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setErrors((prevErrors) => prevErrors.filter((error) => error.type !== name));
  setFormValues((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export const handleError = (
  type: string,
  message: string,
  setErrors: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setErrors((prevErrors) => {
    const filteredErrors = prevErrors.filter((error) => error.type !== type);
    return [...filteredErrors, { type, message }];
  });
};
