import * as api from "../api";

export const login = (formData, history) => async (dispatch) => {
  try {
    //login the user
    const { data } = await api.login(formData);

    dispatch({ type: "AUTH", data });

    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup the user
    const { data } = await api.register(formData);

    dispatch({ type: "AUTH", data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
