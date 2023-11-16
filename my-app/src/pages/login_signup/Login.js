import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginImg from "../../assets/LoginImg.svg";
import logoImg from "../../assets/CircleLogo-removebg-preview.png";

//icons
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AiFillSafetyCertificate } from "../../../node_modules/react-icons/ai";
//css file
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Update the password strength logic
    if (newPassword.length < 6) {
      setPasswordStrength("Weak");
    } else if (newPassword.length < 10) {
      setPasswordStrength("Moderate");
    } else if (/^(?=.*[A-Z])(?=.*[0-9])/.test(newPassword)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Very Strong");
    }
  };

  return (
    <>
      {/* Login navbar */}
      <nav className="login_nav">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="right_text">
          <p>
            Your files remain private, secure and can be deleted instantly from
            your personal page.
          </p>
          <AiFillSafetyCertificate />
        </div>
      </nav>

      {/* Login form */}
      <div className="login_container">
        <div className="login_img">
          <img src={LoginImg} alt="" />
        </div>

        <div className="form_container">
          <h1 className="header">Welcome <br /> <span> Login to Continue</span></h1>

          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="forgot-password">
            Forgot Password ? <Link className="links" to={"/error"}>Click Here!</Link>
            <Link className="links" to={"/signup"}>
              {" "}
              <br /> <br />
              <span>Don't have an account ? </span>SignUp
            </Link>
          </div>

          <div className="submit-container">
            <Link to={"/"} className="submit gray">
              Home
            </Link>

            <Link className="submit">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
