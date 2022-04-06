import client from "../api/client";

const catchError = (error) => {
  if (error?.response?.data) {
    return error.response.data;
  }

  return { success: false, error: error.message };
};

export const signup = async (values) => {
  try {
    const { data } = await client.post("/user/create", { ...values });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const signin = async (values) => {
  try {
    const { data } = await client.post("/user/signin", { ...values });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

/*
   // console.log(values);
      const res = await signin(values);
      formikActions.setSubmitting(false);

      if(!res.success) return console.log(res.error);
      formikActions.resetForm();
      console.log(res);
      */
