import { Routes, Route } from "react-router-dom";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/Home";
import NavigationHeader from "./routes/navigation/Navigation-Header.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<NavigationHeader />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<Auth showSignIn />} />
        <Route path="/sign-up" element={<Auth showSignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
