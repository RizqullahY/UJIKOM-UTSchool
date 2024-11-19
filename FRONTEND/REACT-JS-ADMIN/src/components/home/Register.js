import React, { useState } from "react";
import { Link } from "react-router-dom";
const Swal = require("sweetalert2");

const RegisterForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (username.length <= 8) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Username harus lebih dari 8 karakter",
				icon: "info"
			});
			return
		}
		if (password.length <= 8) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Password harus lebih dari 8 karakter",
				icon: "info"
			});
			return
		}
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasNumbers = /\d/.test(password);
		const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		if (!hasUpperCase) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Password harus mengandung setidaknya satu huruf besar",
				icon: "info"
			});
			return
		}
		if (!hasLowerCase) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Password harus mengandung setidaknya satu huruf kecil",
				icon: "info"
			});
			return
		}
		if (!hasNumbers) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Password harus mengandung setidaknya satu angka",
				icon: "info"
			});
			return
		}
		if (!hasSpecialChars) {
			Swal.fire({
				title: "Pemberitahuan",
				text: "Password harus mengandung setidaknya satu simbol",
				icon: "info"
			});
			return
		}
		const newUser = {
			username: username,
			password: password,
			role: "pelanggan",
		};
		
		try {
			const response = await fetch("http://localhost:5162/api/User", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			});

			if (response.ok) {
				Swal.fire({
					title: "Berhasil",
					text: "Kamu Berhasil Registrasi",
					icon: "success",
					timer: 9999,
				}).then(() => {
					window.location.href = "/";
				});
			} else {
				console.error("Gagal melakukan registrasi");
			}
		} catch (error) {
			console.error("Terjadi kesalahan:", error);
		}
	};

	return (
		<div className="login-container" style={{ marginTop: 150 }}>
			<div className="login-container text-c animated flipInX">
				<div>
					<h1 className="logo-badge text-whitesmoke">
						<span className="fa fa-user-circle"></span>
					</h1>
				</div>
				<h3 className="text-whitesmoke">Register</h3>
				<div className="container-content">
					<form className="margin-t" onSubmit={handleSubmit}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button type="submit" className="form-button button-l">
							Register
						</button>
					</form>
					<p className="margin-t text-whitesmoke">
						<small>
							<b>Bengkel The</b> Gun &copy; 2024
						</small>
					</p>
					<div className="text-center">
						<Link to="/">
							<a href="/" type="submit" className="btn btn-secondary text-center">
								Back
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
