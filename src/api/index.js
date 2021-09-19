export const url = "https://glosity-club-todo.herokuapp.com/api"; //for running globally
// export const url = "http://localhost:5000/api";   //for running in localhost with backend

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
