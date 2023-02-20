import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/Home";

function App() {
  const [isValid, setIsValid] = useState(null);

  return (
    <Routes>
      <Route path="/" element={isValid ? <Home /> : <SignIn />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Auth showSignUp />} />
        <Route path="sign-in" element={<Auth showSignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
