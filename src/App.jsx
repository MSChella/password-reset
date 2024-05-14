// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PasswordResetPage from './components/PasswordReset/passwordReset';
import Header from './components/Header/header';
import ForgotPasswordPage from './components/ForgotPassword/forgotPassword';
import SignIn from './pages/SignIn/signIn';
import signUp from './pages/SignUp/signUp';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/forgot-password" Component={ForgotPasswordPage} />
        <Route path="/reset-password/:token" Component={PasswordResetPage} />
        <Route path="/sign-up" Component={signUp} />
      </Routes>

    </Router>
  );
};

export default App;
