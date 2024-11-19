import React, { Component } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

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
		const { username, password } = this.state;
		try {
				const response = await axios.get(`http://localhost:2000/getUser`);
				const data = response.data.data;

				const user = data.find(
					(user) => user.username === username && user.password === password
				);

				if (user && (user.role === "pelanggan" || user.role === "kasir" || user.role === "admin")) {
					localStorage.setItem("loggedInUser", user.username);
					this.setState({ redirect: true });
				} else {
					this.setState({
						errorMessage: "Username atau Password salah. Silakan coba lagi.",
					});
				}
		} catch (error) {
				console.error("Login error:", error);
				this.setState({ errorMessage: "Terjadi kesalahan. Silakan coba lagi." });
		}
	};

	render() {
		const { username, password, errorMessage, redirect } = this.state;

		if (redirect) {
				return <Navigate to="/Layanan" />;
		}

		return (
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "url('https://static.promediateknologi.id/crop/0x256:1280x1147/750x500/webp/photo/p1/960/2024/06/29/Bengkel-3169437029.jpeg') center/cover no-repeat" }}>
					<div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "8px", textAlign: "center", maxWidth: "400px", width: "100%" }}>
						<h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>Login</h1>
						<p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Selamat Datang di Layanan <b>Bengkel Central Otomotif</b></p>
						<form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={this.handleSubmit}>
								<div style={{ marginBottom: "15px", textAlign: "left" }}>
									<label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
									<input
										type="text"
										id="username"
										name="username"
										placeholder="Username"
										value={username}
										onChange={this.handleInputChange}
										required
										style={{ width: "100%", padding: "8px", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</div>
								<div style={{ marginBottom: "15px", textAlign: "left" }}>
									<label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
									<input
										type="password"
										id="password"
										name="password"
										placeholder="Password"
										value={password}
										onChange={this.handleInputChange}
										required
										style={{ width: "100%", padding: "8px", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</div>
								{errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
								<button type="submit" style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "10px 20px", fontSize: "1rem", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }}>
									Login
								</button>
						</form>
						<div style={{ justifyContent: "center", marginTop: "10px" }}>
								<Link to="/Register">
									<button style={{ backgroundColor: "#6c757d", color: "white", border: "none", padding: "10px 20px", fontSize: "1rem", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }}>Register</button>
								</Link>
						</div>
					</div>
				</div>
		);
	}
}

export default Login;
