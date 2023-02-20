import { createContext, useEffect, useState } from "react";

// const UserContext = () => {
//   const token = window.localStorage.getItem("token");
//   const [isValid, setIsValid] = useState(null);
//   const [loggedUser, setLoggedUser] = useState({});
//   const [categories, setCategories] = useState([]);
//   const [catArray, setCatArray] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/user/", {
//         headers: {
//           Authorization: token,
//         },
//       })
//       .then(function (response) {
//         const user = response.data.user_info;
//         // const id = response.data.user_info.id
//         setLoggedUser(user);
//         setIsValid(true);
//       })
//       .catch(function (error) {
//         console.log(error);
//         window.localStorage.removeItem("token");
//         window.localStorage.removeItem("isLoggedIn");
//         setLoggedUser({});
//         setIsValid(false);
//       });

//     // fetching all categories
//     axios
//       .get("http://localhost:8000/all-categories")
//       .then(function (response) {
//         setCategories(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, [token]);
//   return <></>;
// };

// export default UserContext;

export const UserContext = createContext({
  user: {},
  handleLogin: () => {},
  isValid: false,
  username: "",
  password: "",
});

export const UserProvider = ({ children }) => {
  let tok = window.localStorage.getItem("token");
  const [token, setToken] = useState();
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const value = { user };
  setToken(tok);

  useEffect(() => {
    const handleLogin = async () => {
      const URL = "http://localhost:8000/login/";
      const response = await fetch(URL, {
        method: "POST",
        headers: token,
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((res) => {
          token = `Token ${res.data.token}`;
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("isLoggedIng", "true");
          document.location.reload();
        })
        .catch((err) => {
          console.log(err);
          err.response.data.non_field_erros
            ? alert(err.response.data.non_field_errors)
            : console.log("credentials are okay");
        });

      const users = await response.json();
      setUser(users);
    };
    // handleLogin();
  }, []);

      return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
