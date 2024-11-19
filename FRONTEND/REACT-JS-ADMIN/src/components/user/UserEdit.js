/* eslint-disable react-hooks/exhaustive-deps */
import "./User.css";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";

function ReservasiEdit() {
	const { id_user } = useParams();
	console.log('Layanan ID:', id_user);

	const [formValue, setFormValue] = React.useState({
		username: "",
		password: "",
		role: "admin"
	});

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/User/${id_user}`
			);
			const data = response.data.data;
			console.log(data);

			setFormValue({
				username: data.username,
				password: data.password,
				role: data.role,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.put(
				`http://localhost:5162/api/User/${id_user}`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			alert("Data berhasil diubah");
			window.location.href = "/User";
		} catch (error) {
			console.log(error);
			alert("Error updating data");
		}
	};

	return (
		<div className="card" style={{ marginTop: 150 }}>
			<div className="container">
				<div className="Titel">Edit User</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
						<div className="form-group" style={{ gridColumn: '1 / span 2' }}>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								placeholder="Enter username"
								value={formValue.username}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="text"
								name="password"
								placeholder="Enter password"
								value={formValue.password}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="role">Role</label>
							<select
								name="role"
								id="role"
								value={formValue.role}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							>
								<option value="admin">Admin</option>
								<option value="pelanggan">Pelanggan</option>
								<option value="kasir">Kasir</option>
							</select>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Simpan</button>
							<Link to="/User">
								<button type="button" className="btn btn-secondary ms-4">Back</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReservasiEdit;
