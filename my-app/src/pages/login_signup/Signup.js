import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterImg from "../../assets/Register.jpg";
import logoImg from "../../assets/CircleLogo-removebg-preview.png";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AiFillSafetyCertificate } from "../../../node_modules/react-icons/ai";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
//css file
import "./Signup.css";

export default function Signup() {
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

      {/* SignUp form */}

      <div className="signup_container">
        <div className="login_img">
          <img src={RegisterImg} alt=""/>
        </div>

        <div className="form_container">
          <h1 className="header">SignUp <br /> <span>Create a free account</span></h1>

          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>

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

            <div className="password-strength">
              Password Strength:{" "}
              <span
                className={
                  passwordStrength === "Weak"
                    ? "red"
                    : passwordStrength === "Moderate"
                    ? "blue"
                    : passwordStrength === "Strong"
                    ? "green"
                    : "green"
                }
              >
                {passwordStrength}
              </span>
            </div>
          </div>

          <div className="forgot-password">
            <Link className="links" to={"/login"}><span>Already have an account ? </span> SignIn</Link>
          </div>

          <div className="submit-container">
            <Link to={"/"} className="submit gray">
              Home
            </Link>
            <Link className="submit">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
