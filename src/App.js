import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/Home";
import NavigationHeader from "./routes/navigation/Navigation-Header.component";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={isLoggedIn ? <NavigationHeader /> : <Auth showSignIn />}
      >
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<Auth showSignUp={setIsLoggedIn} />} />
        <Route path="/sign-in" element={<Auth showSignIn={setIsLoggedIn} />} />
      </Route>
    </Routes>
  );
}

export default App;
