import { useState, useEffect } from "react";
import axios from "axios";

const UserContext = () => {
  const token = window.localStorage.getItem("token");
  const [isValid, setIsValid] = useState(null);
  const [loggedUser, setLoggedUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/", {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        const user = response.data.user_info;
        // const id = response.data.user_info.id
        setLoggedUser(user);
        setIsValid(true);
      })
      .catch(function (error) {
        console.log(error);
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("isLoggedIn");
        setLoggedUser({});
        setIsValid(false);
      });

    // fetching all categories
    axios
      .get("http://localhost:8000/all-categories")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token]);
  return <></>;
};

export default UserContext;
