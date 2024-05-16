import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Signin = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const handleLoginClick = (e) => {
    setShowLogin(true);
  };

  const handleSignupClick = (e) => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 p-5">
      <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>

      {showLogin ? (
        <Login onClose={onClose} onSignupClick={handleSignupClick} />
      ) : (
        showSignup && (
          <Signup onClose={onClose} onLoginClick={handleLoginClick} />
        )
      )}
    </div>
  );
};

export default Signin;
