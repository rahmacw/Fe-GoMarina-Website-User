import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const login = e.target.login.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username: login,
        password: password,
      });

      const { accessToken, role } = response.data;

      // Simpan token dan role ke localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userRole", role);

      // Redirect ke dashboard admin hanya jika role = admin
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        setErrorMessage("Anda tidak memiliki akses sebagai admin.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login gagal. Periksa kredensial Anda."
      );
    }
  };

  return (
    <div className="sign-in">
      <div className="content-wrapper-signin">
        {/* Welcome Section */}
        <div className="welcome-section-signin">
          <h1>Selamat Datang!</h1>
          <p className="description-signin">
            Silakan masuk untuk mengakses dashboard admin.
          </p>
        </div>

        {/* Form Section */}
        <div className="form-section-signin">
          <h2>Sign In</h2>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <label>Username/Email</label>
            <input type="text" name="login" placeholder="Masukkan username/email" required />
            <label>Password</label>
            <div className="password-field-signin">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Masukkan password"
                required
              />
              <i
                className={`fas fa-eye${passwordVisible ? "" : "-slash"} icon-eye`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
