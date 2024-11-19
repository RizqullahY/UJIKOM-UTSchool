import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [registrationStatus, setRegistrationStatus] = useState(""); // State untuk status registrasi

   const handleRegister = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert("Password and Confirm Password do not match!");
         return;
      }

      try {
         const response = await axios.post("http://localhost:2000/insertUser", {
            username,
            password,
         });

         if (response.data.success) {
            setRegistrationStatus("success");
         } else {
            setRegistrationStatus("failure");
         }
      } catch (error) {
         console.error("Error registering user:", error);
         setRegistrationStatus("error");
      }
   };

   return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "url('https://static.promediateknologi.id/crop/0x256:1280x1147/750x500/webp/photo/p1/960/2024/06/29/Bengkel-3169437029.jpeg') center/cover no-repeat" }}>
         <div className="register-card" style={{ textAlign: 'center', margin: 'auto', maxWidth: '400px',backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <div className="register-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
               <h1 className="register-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>Register</h1>
               <p className="register-subtitle" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Buat Akun Baru di Layanan <b>Bengkel Central Otomotif</b></p>
               {registrationStatus === "success" && (
                  <div className="success-message" style={{ backgroundColor: '#dff0d8', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
                     User registered successfully! <br />
                     <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Back to Login</Link>
                  </div>
               )}
               {registrationStatus === "failure" && (
                  <div className="failure-message" style={{ backgroundColor: '#f2dede', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
                     Registration failed. Please try again. <br />
                     <button onClick={() => setRegistrationStatus("")} style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Retry</button>
                  </div>
               )}
               {registrationStatus === "error" && (
                  <div className="error-message" style={{ backgroundColor: '#f2dede', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
                     An error occurred during registration. Please try again later. <br />
                     <button onClick={() => setRegistrationStatus("")} style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Retry</button>
                  </div>
               )}
               {registrationStatus === "" && (
                  <form className="register-form" onSubmit={handleRegister}>
                     <div className="input-group" style={{ marginBottom: '10px' }}>
                        <label htmlFor="username">Username</label>
                        <input
                           type="text"
                           id="username"
                           name="username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                           style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                     </div>
                     <div className="input-group" style={{ marginBottom: '10px' }}>
                        <label htmlFor="password">Password</label>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                     </div>
                     <div className="input-group" style={{ marginBottom: '10px' }}>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                           type="password"
                           id="confirm-password"
                           name="confirm-password"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           required
                           style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                     </div>
                     <button type="submit" className="register-button" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Register
                     </button>
                  </form>
               )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
               <Link to="/" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary" style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Back</button>
               </Link>
            </div>
         </div></div>
   );
};

export default Register;
