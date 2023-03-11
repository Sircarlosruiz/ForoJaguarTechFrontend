import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Auth showSignUp />} />
        <Route path="sign-in" element={<Auth showSignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
