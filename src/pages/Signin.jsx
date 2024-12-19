import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sign-in.css"; // Assuming CSS is in the same directory
import logoImage from "../assets/images/logo/Logo.jpg"; // Import the image


function SignIn({ setIsAuthenticated }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // For navigation to Dashboard.jsx

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;

    // Validation for admin credentials
    if (login === "admin" && password === "admin") {
      setError(""); // Clear error message
      setIsAuthenticated(true); // Update authentication status
      localStorage.setItem("isAuthenticated", "true"); // Store login status
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      setError("Username atau password salah!"); // Set error message
    }
  };

  return (
    <div className="sign-in">
      <div className="content-wrapper-signin">
        <div className="welcome-section-signin">
          <div className="logo-wrapper-signin">
            <img
              src={logoImage} // Use the imported image here
              alt="Logo Kebun Jambu Marina"
              className="logo-utama"
            />
          </div>
          <h1>Selamat Datang!</h1>
          <p className="description-signin">
            Kebun Jambu Marina menawarkan berbagai kegiatan seru dan edukatif
            untuk semua kalangan. Mulai dari memetik jambu merah segar langsung
            dari kebunnya, berkuda mengelilingi perkebunan yang asri, hingga
            berburu spot foto instagramable di antara hamparan hijau yang
            mempesona.
          </p>
        </div>

        <div className="form-section-signin">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="login"
              required
              placeholder="Masukkan username"
            />

            <label>Password</label>
            <div className="password-field-signin">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password-input"
                required
                placeholder="Masukkan password"
              />
              <i
                className={`fas fa-eye${
                  passwordVisible ? "" : "-slash"
                } icon-eye`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            {/* Display error message */}
            {error && <p className="error-message">{error}</p>}

            <button className="button-signin" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
