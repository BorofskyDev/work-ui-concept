import React from "react";
import Signup from "./user/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./user/ForgotPassword";
import UpdateProfile from "./user/UpdateProfile";
import Profile from "./user/Profile";
import Dashboard from "./file-manager/Dashboard";


function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Routes>
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
              </PrivateRoute>} />'

              {/* File Management */}
              <Route exact path="/" element={<PrivateRoute>
                <Dashboard/>
              </PrivateRoute>} />
            </Routes>
          </AuthProvider>
        </Router>
        
      
    
  );
}

export default App;
