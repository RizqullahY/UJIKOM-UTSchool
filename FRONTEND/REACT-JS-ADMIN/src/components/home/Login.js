/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Swal = require('sweetalert2')

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			errorMessage: "",
			redirect: false,
		};
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		localStorage.removeItem("id_user");
		localStorage.removeItem("loggedInUser");
		localStorage.removeItem("roleUser");
		const { username, password } = this.state;
		try {
			const response = await axios.post(
				`http://localhost:5162/api/User/login`,
				{ username, password },
				{ headers: { "Content-Type": "application/json" } }
			);

			const data = response.data.data;
			console.log(data);

			if (data.role === "admin") {
				localStorage.setItem("loggedInUser", data.username);
				localStorage.setItem("roleUser", "admin");
				Swal.fire({
					title: "Berhasil Login",
					text: "Selamat Datang Admin",
					icon: "success",
					timer: 9999,
				}).then(()=>{
					this.setState({ redirect: true });
				})
			} else if (data.role === "pelanggan") {
				localStorage.setItem("loggedInUser", data.username);
				localStorage.setItem("roleUser", "pelanggan");
				localStorage.setItem("id_user", data.id_user);
				Swal.fire({
					title: "Berhasil Login",
					text: "Selamat Datang Pelanggan",
					icon: "success",
					timer: 9999,
				}).then(()=>{
					this.setState({ redirectPelanggan: true });
				})
			} else {
				Swal.fire({
					title: "Gagal",
					text: "Pastikan Username dan Password Telah Sesuai",
					icon: "error",
					timer: 9999,
				})
			}
		} catch (error) {
			console.error("Login error:", error);
			Swal.fire({
				title: "Gagal",
				text: "Pastikan Username dan Password Telah Sesuai",
				icon: "error",
				timer: 9999,
			})
		}
	};

	render() {
		const { username, password, errorMessage, redirect, redirectPelanggan } =
			this.state;

		if (redirect) {
			return <Navigate to="/Layanan" />;
		}
		if (redirectPelanggan) {
			return <Navigate to="/LayananPelanggan" />;
		}

		return (
			<div className="login-container" style={{ marginTop: 150 }}>
				<div className="login-container text-c animated flipInX">
					<div>
						<h1 className="logo-badge text-whitesmoke">
							<span className="fa fa-user-circle"></span>
						</h1>
					</div>
					<h3 className="text-whitesmoke">Login</h3>
					<div className="container-content">
						<form className="margin-t" onSubmit={this.handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									id="username"
									name="username"
									placeholder="Username"
									value={username}
									onChange={this.handleInputChange}
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
									onChange={this.handleInputChange}
									required
								/>
							</div>
							{errorMessage && (
								<div className="error-message">{errorMessage}</div>
							)}
							<button type="submit" className="form-button button-l margin-b">
								Login
							</button>
						</form>
						<a href="/Register">Belum Punya Akun?</a>
						<p className="margin-t text-whitesmoke">
							<small>
								<b>Bengkel</b> Central Otomotif &copy; 2024
							</small>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
