import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/booking/:serviceId/*"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
