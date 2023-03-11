import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";
import { UserContext } from "./context/user.context";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/Home";
import NavigationHeader from "./routes/navigation/Navigation-Header.component";

function App() {
  const { users, isValid } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={isValid ? <NavigationHeader /> : <SignIn/>}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Auth showSignUp />} />
        <Route path="sign-in" element={<Auth showSignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
