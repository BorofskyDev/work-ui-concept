import React from "react";
import Signup from "./user/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./user/ForgotPassword";
import UpdateProfile from "./user/UpdateProfile";
import Profile from "./user/Profile";


function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Routes>

              {/* File Management */}

              {/* Authentication */}
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />

              {/* Profile */}
              <Route path="/user" element={<PrivateRoute>
                <Profile />
                </PrivateRoute>}/>
              <Route path="/update-profile" element={<PrivateRoute>
                <UpdateProfile/>
              </PrivateRoute>} />
            </Routes>
          </AuthProvider>
        </Router>
        
      
    
  );
}

export default App;
